import React, { Component, Fragment } from 'react';
import { stringify } from 'svgson';
import GitHubHeader from './GitHubHeader/GitHubHeader';
import * as ContributionsDataUtils from '../../../utils/ContributionsDataUtils/ContributionsDataUtils';
import * as Users from '../../../resources/Users/Users';
import BasicCalendar from '../../../resources/BasicCalendar/BasicCalendar.json';
import * as CalendarUtils from '../../../utils/CalendarUtils/CalendarUtils';

class GitHubSvg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contributionsData: [],
      isLoading: true,
    };

    this.container = null;
  }

  async componentDidMount() {
    let svg = stringify(BasicCalendar);
    this.container.innerHTML = svg;

    const parsedData = await ContributionsDataUtils.GetParsedData(Users.GithubUsernames);

    this.setState({
      contributionsData: [...parsedData],
      isLoading: false,
    });

    svg = CalendarUtils.AdjustFetchedCalendarStyle(parsedData[0]);
    this.container.innerHTML = stringify(svg);
  }

  render() {
    const { contributionsData: [...contributionsData], isLoading } = this.state;

    return (
      <Fragment>
        <GitHubHeader
          isLoading={isLoading}
          contributionsData={contributionsData}
        />
        <div ref={(el) => {
          this.container = el;
        }}
        />
      </Fragment>
    );
  }
}

export default GitHubSvg;
