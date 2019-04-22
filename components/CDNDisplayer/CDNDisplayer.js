import React, { Component } from 'react';
import * as Users from '../../resources/Users/Users';

// https://stackoverflow.com/a/44877953/9599137
class CDNDisplayer extends Component {
  constructor(props) {
    super(props);

    this.container = null;
  }

  componentDidMount() {
    window.TeamContributionCalendar(this.container, Users.GithubUsernames, Users.GitlabUsernames);
  }

  render() {
    return (
      <div
        className="container"
        ref={(el) => {
          this.container = el;
        }}
      />
    );
  }
}

export default CDNDisplayer;
