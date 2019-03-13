import React, { Component } from 'react';
import GitHubDataDisplayer from './GitHubDataDisplayer/GitHubDataDisplayer';
import GetParsedContributionsData from '../../utils/GetParsedContributionsData/GetParsedContributionsData';

class GitHubContributions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contributionsData: null,
    };
  }

  async componentDidMount() {
    const { userNames } = this.props;

    const parsedContributionsData = await GetParsedContributionsData(userNames);

    this.setState({
      contributionsData: parsedContributionsData,
    });
  }

  render() {
    const { contributionsData } = this.state;

    let contributionsDisplayer = <p>Loading ...</p>;

    if (contributionsData) {
      contributionsDisplayer = <GitHubDataDisplayer contributionsData={contributionsData} />;
    }

    return contributionsDisplayer;
  }
}

export default GitHubContributions;
