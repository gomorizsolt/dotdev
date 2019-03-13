import React, { Component } from 'react';
import GitHubDataDisplayer from './GitHubDataDisplayer/GitHubDataDisplayer';
import * as ContributionsDataUtils from '../../utils/ContributionsDataUtils/ContributionsDataUtils';

class GitHubContributions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contributionsData: [],
    };
  }

  async componentDidMount() {
    const { userNames } = this.props;

    const parsedContributionsData = await ContributionsDataUtils.GetParsedData(userNames);

    this.setState({
      contributionsData: parsedContributionsData,
    });
  }

  render() {
    const { contributionsData } = this.state;

    let contributionsDisplayer = <p>Loading ...</p>;

    if (contributionsData.length !== 0) {
      contributionsDisplayer = <GitHubDataDisplayer contributionsData={contributionsData} />;
    }

    return contributionsDisplayer;
  }
}

export default GitHubContributions;
