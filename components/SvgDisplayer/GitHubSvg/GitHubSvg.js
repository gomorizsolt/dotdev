import React, { Component, Fragment } from 'react';
import svgson, { stringify } from 'svgson';
import parser from 'html-react-parser';
import GitHubHeader from './GitHubHeader/GitHubHeader';
import * as Users from '../../../resources/Users/Users';
import BasicCalendar from '../../../resources/BasicCalendar/BasicCalendar.json';
import * as CalendarUtils from '../../../utils/CalendarUtils/CalendarUtils';
import * as SvgUtils from '../../../utils/SvgUtils/SvgUtils';

class GitHubSvg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usersParsedCalendarGraphs: [],
      actualCalendar: BasicCalendar,
      isLoading: true,
    };
  }

  componentDidMount() {
    Users.GithubUsernames.map(async (userName) => {
      const rawUserSVG = await SvgUtils.GetGitHubUserSVG(userName);

      this.setActualCalendar(svgson.parse(rawUserSVG.outerHTML));
    });
  }

  setActualCalendar(calendarGraphPromise) {
    const { usersParsedCalendarGraphs: [...usersParsedCalendarGraphs] } = this.state;
    let { actualCalendar: { ...actualCalendar } } = this.state;

    calendarGraphPromise.then((parsedCalendarGraph) => {
      usersParsedCalendarGraphs.push(parsedCalendarGraph);

      if (usersParsedCalendarGraphs.length === 1) {
        actualCalendar = parsedCalendarGraph;
      } else {
        actualCalendar = CalendarUtils.MergeSvgs(actualCalendar, parsedCalendarGraph);
      }

      this.setState({
        usersParsedCalendarGraphs,
        actualCalendar,
        isLoading: false,
      });
    });
  }

  render() {
    const {
      usersParsedCalendarGraphs: [...usersParsedCalendarGraphs],
      actualCalendar: { ...actualCalendar },
      isLoading,
    } = this.state;

    return (
      <Fragment>
        <GitHubHeader
          isLoading={isLoading}
          contributionSvgs={usersParsedCalendarGraphs}
        />
        {parser(stringify(actualCalendar))}
      </Fragment>
    );
  }
}

export default GitHubSvg;
