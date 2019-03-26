import React, { Component, Fragment } from 'react';
import { stringify } from 'svgson';
import parser from 'html-react-parser';
import GitHubHeader from './GitHubHeader/GitHubHeader';
import * as CalendarUtils from '../../../utils/CalendarUtils/CalendarUtils';
import * as ContributionsDataUtils from '../../../utils/ContributionsDataUtils/ContributionsDataUtils';
import * as Users from '../../../resources/Users/Users';

class GitHubSvg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contributionsData: [],
      isLoading: true,
    };

    this.container = stringify(CalendarUtils.GetTodaysCalendar());
  }

  async componentDidMount() {
    const parsedData = await ContributionsDataUtils.GetParsedData(Users.GithubUsernames);

    this.setState({
      contributionsData: [...parsedData],
      isLoading: false,
    });
  }

  render() {
    const { contributionsData: [...contributionsData], isLoading } = this.state;

    return (
      <Fragment>
        <GitHubHeader
          isLoading={isLoading}
          contributionsData={contributionsData}
        />
        {parser(this.container)}
      </Fragment>
    );
  }
}

export default GitHubSvg;
