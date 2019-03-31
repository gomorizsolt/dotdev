import React, { Component, Fragment } from 'react';
import { stringify, parse } from 'svgson';
import HtmlReactParser from 'html-react-parser';
import GitHubHeader from './GitHubHeader/GitHubHeader';
import ErrorDisplayer from '../../UI/ErrorDisplayer/ErrorDisplayer';
import * as Users from '../../../resources/Users/Users';
import * as CalendarUtils from '../../../utils/CalendarUtils/CalendarUtils';
import * as SvgUtils from '../../../utils/SvgUtils/SvgUtils';
import BasicCalendar from '../../../resources/BasicCalendar/BasicCalendar.json';

class GitHubSvg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usersParsedCalendarGraphs: [],
      actualCalendar: BasicCalendar,
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchFirstUserCalendar();
  }

  setActualCalendar(calendarGraphPromise) {
    const { actualCalendar: { ...actualCalendar } } = this.state;
    calendarGraphPromise.then((parsedCalendarGraph) => {
      const updatedActualCalendar = CalendarUtils.MergeSvgs(actualCalendar, parsedCalendarGraph);

      this.writeState({
        newParsedCalendar: parsedCalendarGraph,
        updatedActualCalendar,
      });
    });
  }

  async fetchFirstUserCalendar() {
    const firstUser = Users.GithubUsernames[0];
    const parsedGitHubCalendar = await CalendarUtils.getParsedGitHubCalendarSync(firstUser);

    this.setState({
      isLoading: false,
    });

    if (parsedGitHubCalendar) {
      this.writeState({
        newParsedCalendar: parsedGitHubCalendar,
        updatedActualCalendar: parsedGitHubCalendar,
      });

      this.fetchRemainingCalendars();
    } else {
      this.setState({
        error: CalendarUtils.getIncorrectFirstUserCalendarErrorMessage(),
      });
    }
  }

  fetchRemainingCalendars() {
    Users.GithubUsernames.slice(1).map(async (userName) => {
      const rawUserSVG = await SvgUtils.GetGitHubUserSVG(userName);

      this.setActualCalendar(parse(rawUserSVG.outerHTML));
    });
  }

  writeState(data) {
    const { newParsedCalendar, updatedActualCalendar } = data;

    this.setState(prevState => ({
      usersParsedCalendarGraphs: [
        ...prevState.usersParsedCalendarGraphs,
        newParsedCalendar,
      ],
      actualCalendar: {
        ...updatedActualCalendar,
      },
    }));
  }

  render() {
    const {
      usersParsedCalendarGraphs: [...usersParsedCalendarGraphs],
      actualCalendar: { ...actualCalendar },
      isLoading,
      error,
    } = this.state;

    const stringifiedHTMLContent = stringify(actualCalendar);

    return (
      <Fragment>
        <GitHubHeader
          isLoading={isLoading}
          contributionSvgs={usersParsedCalendarGraphs}
        />
        {HtmlReactParser(stringifiedHTMLContent)}
        <ErrorDisplayer errorMessage={error} />
      </Fragment>
    );
  }
}

export default GitHubSvg;
