import React, { Component, Fragment } from 'react';
import { stringify, parse } from 'svgson';
import HtmlReactParser from 'html-react-parser';
import GitHubHeader from './GitHubHeader/GitHubHeader';
import * as Users from '../../../resources/Users/Users';
import * as GithubContributionsCalendarUtils from '../../../utils/GithubContributionsCalendarUtils/GithubContributionsCalendarUtils';
import * as SvgUtils from '../../../utils/SvgUtils/SvgUtils';
import BasicCalendar from '../../../resources/BasicCalendar/BasicCalendar.json';

class GitHubSvg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sumOfContributions: 0,
      actualCalendar: BasicCalendar,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchFirstUserCalendar();
  }

  setActualCalendar(gitHubCalendarGraphPromise) {
    const { actualCalendar: { ...actualCalendar } } = this.state;
    gitHubCalendarGraphPromise.then((parsedGitHubCalendar) => {
      const updatedActualCalendar = GithubContributionsCalendarUtils
        .MergeSvgs(actualCalendar, parsedGitHubCalendar);
      const sumOfCurrentUserContributions = GithubContributionsCalendarUtils
        .SumGitHubCalendarContributions(parsedGitHubCalendar);

      this.writeState({
        sumOfCurrentUserContributions,
        updatedActualCalendar,
      });
    });
  }

  async fetchFirstUserCalendar() {
    const firstUser = Users.GithubUsernames[0];

    try {
      const parsedGitHubCalendar = await GithubContributionsCalendarUtils
        .getParsedGitHubCalendarSync(firstUser);

      this.setState({
        isLoading: false,
      });

      const sumOfCurrentUserContributions = GithubContributionsCalendarUtils
        .SumGitHubCalendarContributions(parsedGitHubCalendar);

      this.writeState({
        sumOfCurrentUserContributions,
        updatedActualCalendar: parsedGitHubCalendar,
      });

      this.fetchRemainingCalendars();
    } catch (err) {
      this.setState({
        isLoading: false,
      });

      // eslint-disable-next-line no-console
      console.error(err.message);
    }
  }

  fetchRemainingCalendars() {
    Users.GithubUsernames.slice(1).map(async (userName) => {
      const rawUserSVG = await SvgUtils.GetGitHubUserSVG(userName);

      this.setActualCalendar(parse(rawUserSVG.outerHTML));
    });
  }

  writeState(data) {
    const { sumOfCurrentUserContributions, updatedActualCalendar } = data;

    this.setState(prevState => ({
      sumOfContributions: prevState.sumOfContributions + sumOfCurrentUserContributions,
      actualCalendar: {
        ...updatedActualCalendar,
      },
    }));
  }

  render() {
    const {
      sumOfContributions,
      actualCalendar: { ...actualCalendar },
      isLoading,
    } = this.state;

    const stringifiedHTMLContent = stringify(actualCalendar);

    return (
      <Fragment>
        <GitHubHeader
          isLoading={isLoading}
          sumOfContributions={sumOfContributions}
        />
        {HtmlReactParser(stringifiedHTMLContent)}
      </Fragment>
    );
  }
}

export default GitHubSvg;
