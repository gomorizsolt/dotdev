import React, { Component, Fragment } from 'react';
import { stringify, parse } from 'svgson';
import HtmlReactParser from 'html-react-parser';
import GitHubHeader from './GitHubHeader/GitHubHeader';
import * as Users from '../../../resources/Users/Users';
import BasicCalendar from '../../../resources/BasicCalendar/BasicCalendar.json';
import * as CalendarUtils from '../../../utils/CalendarUtils/CalendarUtils';
import * as SvgUtils from '../../../utils/SvgUtils/SvgUtils';
import * as JavaScriptUtils from '../../../utils/JavaScriptUtils/JavaScriptUtils';

class GitHubSvg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usersParsedCalendarGraphs: [],
      actualCalendar: BasicCalendar,
      isLoading: true,
    };
  }

  async componentDidMount() {
    await this.fetchFirstUserCalendar();

    Users.GithubUsernames.slice(1).map(async (userName) => {
      const rawUserSVG = await SvgUtils.GetGitHubUserSVG(userName);

      this.setActualCalendar(parse(rawUserSVG.outerHTML));
    });
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
    // TODO: RESTRUCTURE FUNCTION NAMES TO LOWER CAMEL CASE.
    const parsedGitHubCalendar = await CalendarUtils.getParsedGitHubCalendarSync(firstUser);

    this.writeState({
      newParsedCalendar: parsedGitHubCalendar,
      updatedActualCalendar: parsedGitHubCalendar,
      isLoading: false,
    });
  }

  writeState(data) {
    const { newParsedCalendar, updatedActualCalendar, isLoading } = data;

    if (JavaScriptUtils.isDefined(isLoading)) {
      this.setState({
        isLoading,
      });
    }

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
    } = this.state;

    const stringifiedHTMLContent = stringify(actualCalendar);

    return (
      <Fragment>
        <GitHubHeader
          isLoading={isLoading}
          contributionSvgs={usersParsedCalendarGraphs}
        />
        {HtmlReactParser(stringifiedHTMLContent)}
      </Fragment>
    );
  }
}

export default GitHubSvg;
