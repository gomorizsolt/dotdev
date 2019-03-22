import React, { Component, Fragment } from 'react';
import { stringify } from 'svgson';
import ContributionsValueDisplayer from '../../UI/ContributionsValueDisplayer/ContributionsValueDisplayer';
import GitHubFooter from './GitHubFooter/GitHubFooter';
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

    this.container = null;
  }

  async componentDidMount() {
    const svg = stringify(CalendarUtils.GetTodaysCalendar());

    this.container.innerHTML = svg;

    const parsedData = await ContributionsDataUtils.GetParsedData(Users.GithubUsernames);

    this.setState({
      contributionsData: parsedData,
      isLoading: false,
    });
  }

  render() {
    const { contributionsData: [...contributionsData], isLoading } = this.state;
    return (
      <Fragment>
        <ContributionsValueDisplayer
          isLoading={isLoading}
          contributionsData={contributionsData}
        />
        <div ref={(el) => {
          this.container = el;
        }}
        />
        <GitHubFooter />
      </Fragment>
    );
  }
}

export default GitHubSvg;
