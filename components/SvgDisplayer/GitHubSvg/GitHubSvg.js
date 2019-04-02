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
      totalContributions: 0,
      actualCalendar: BasicCalendar,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchFirstUserCalendar();
  }

  setActualCalendar(gitHubCalendarPromise) {
    const { actualCalendar: { ...actualCalendar } } = this.state;

    gitHubCalendarPromise.then((parsedGitHubCalendar) => {
      const updatedActualCalendar = GithubContributionsCalendarUtils
        .mergeSvgs(actualCalendar, parsedGitHubCalendar);
      const currentUserTotalContributions = GithubContributionsCalendarUtils
        .sumGitHubCalendarContributions(parsedGitHubCalendar);

      this.writeState({
        currentUserTotalContributions,
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

      const currentUserTotalContributions = GithubContributionsCalendarUtils
        .sumGitHubCalendarContributions(parsedGitHubCalendar);

      this.writeState({
        currentUserTotalContributions,
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
      const rawUserSVG = await SvgUtils.getGitHubUserSVG(userName);

      this.setActualCalendar(parse(rawUserSVG.outerHTML));
    });
  }

  writeState(data) {
    const { currentUserTotalContributions, updatedActualCalendar } = data;

    this.setState(prevState => ({
      totalContributions: prevState.totalContributions + currentUserTotalContributions,
      actualCalendar: {
        ...updatedActualCalendar,
      },
    }));
  }

  render() {
    const {
      totalContributions,
      actualCalendar: { ...actualCalendar },
      isLoading,
    } = this.state;

    const stringifiedHTMLContent = stringify(actualCalendar);

    return (
      <Fragment>
        <GitHubHeader
          isLoading={isLoading}
          totalContributions={totalContributions}
        />
        {HtmlReactParser(stringifiedHTMLContent)}
      </Fragment>
    );
  }
}

export default GitHubSvg;
