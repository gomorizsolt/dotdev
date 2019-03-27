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
      contributionsData: [],
      actualCalendar: BasicCalendar,
      isLoading: true,
    };
  }

  componentDidMount() {
    Users.GithubUsernames.map(async (userName) => {
      const userSVG = await SvgUtils.GetGitHubUserSVG(userName);

      this.setCalendar(svgson.parse(userSVG.outerHTML));
    });
  }

  // Missing tests.
  setCalendar(data) {
    // Error handling
    const { contributionsData: [...contributionsData] } = this.state;
    let { actualCalendar: { ...actualCalendar } } = this.state;

    data.then((parsedSvgData) => {
      contributionsData.push(parsedSvgData);

      if (contributionsData.length === 1) {
        actualCalendar = CalendarUtils.AdjustFetchedCalendarStyle(parsedSvgData);
      } else {
        actualCalendar = CalendarUtils.MergeSvgs(actualCalendar, parsedSvgData);
      }

      this.setState({
        contributionsData,
        actualCalendar,
      });
    });
  }

  render() {
    const {
      contributionsData: [...contributionsData],
      actualCalendar: { ...actualCalendar },
      isLoading,
    } = this.state;

    return (
      <Fragment>
        <GitHubHeader
          isLoading={isLoading}
          contributionsData={contributionsData}
        />
        {parser(stringify(actualCalendar))}
      </Fragment>
    );
  }
}

export default GitHubSvg;
