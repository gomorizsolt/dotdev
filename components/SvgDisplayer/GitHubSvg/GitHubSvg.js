import React, { Component, Fragment } from 'react';
import { stringify } from 'svgson';
import HtmlReactParser from 'html-react-parser';
import GitHubHeader from './GitHubHeader/GitHubHeader';
import * as Users from '../../../resources/Users/Users';
import * as GitHubContributionsCalendar from '../../../utils/GitHubContributionsCalendar/GitHubContributionsCalendar';
import * as GitLabContributionsCalendar from '../../../utils/GitLabContributionsCalendar/GitLabContributionsCalendar';
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
    this.fetchFirstGitHubUserCalendar();
  }

  processGitHubCalendar(currentUserJsonCalendar) {
    const { actualCalendar: { ...actualCalendar } } = this.state;

    const updatedActualCalendar = GitHubContributionsCalendar
      .mergeCalendars(actualCalendar, currentUserJsonCalendar);

    const currentUserTotalContributions = GitHubContributionsCalendar
      .getTotalContributions(currentUserJsonCalendar);

    this.writeState({
      currentUserTotalContributions,
      updatedActualCalendar,
    });
  }

  processGitLabCalendar(currentUserJsonCalendar) {
    const { actualCalendar: { ...actualCalendar } } = this.state;

    const updatedActualCalendar = GitLabContributionsCalendar
      .mergeCalendars(actualCalendar, currentUserJsonCalendar);

    const currentUserTotalContributions = GitLabContributionsCalendar
      .getTotalContributions(currentUserJsonCalendar);

    this.writeState({
      currentUserTotalContributions,
      updatedActualCalendar,
    });
  }

  async fetchFirstGitHubUserCalendar() {
    const firstGitHubUser = Users.GithubUsernames[0];
    const normalSizedCalendarWidth = '669';

    const firstUserJsonCalendar = await GitHubContributionsCalendar
      .getJsonFormattedCalendarSync(firstGitHubUser);

    this.setState({
      isLoading: false,
    });

    const isCalendarFullWidth = firstUserJsonCalendar.attributes.width === normalSizedCalendarWidth;

    if (!isCalendarFullWidth) {
      // eslint-disable-next-line no-console
      console.error(
        GitHubContributionsCalendar.getIncorrectFirstUserCalendarErrorMessage(),
      );
    } else {
      const currentUserTotalContributions = GitHubContributionsCalendar
        .getTotalContributions(firstUserJsonCalendar);

      this.writeState({
        currentUserTotalContributions,
        updatedActualCalendar: firstUserJsonCalendar,
      });

      this.fetchRemainingCalendars();
    }
  }

  fetchRemainingCalendars() {
    Users.GithubUsernames.slice(1).map(async (gitHubUsername) => {
      const currentUserJsonCalendar = await GitHubContributionsCalendar
        .getJsonFormattedCalendar(gitHubUsername);

      this.processGitHubCalendar(currentUserJsonCalendar);
    });

    Users.GitlabUsernames.map(async (gitLabUsername) => {
      const currentUserJsonCalendar = await GitLabContributionsCalendar
        .getJsonFormattedCalendar(gitLabUsername);

      this.processGitLabCalendar(currentUserJsonCalendar);
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
