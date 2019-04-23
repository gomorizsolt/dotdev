import React, { Component } from 'react';
import * as Users from '../../resources/Users/Users';

class TeamContributionCalendar extends Component {
  constructor(props) {
    super(props);

    this.container = null;
  }

  componentDidMount() {
    // https://stackoverflow.com/a/44877953/9599137
    window.TeamContributionCalendar(this.container, Users.GithubUsernames, Users.GitlabUsernames);
  }

  render() {
    return (
      <div
        className="calendarContainer"
        ref={(el) => {
          this.container = el;
        }}
      />
    );
  }
}

export default TeamContributionCalendar;
