import React, { Component } from "react";
import TeamContributionCalendar from "@c-hive/team-contribution-calendar";
import { teamContributionCalendarUsers } from "../../../settings/settings.json";

class TeamContributionCalendarDisplayer extends Component {
  constructor(props) {
    super(props);

    this.calendarContainer = null;
  }

  componentDidMount() {
    TeamContributionCalendar(
      this.calendarContainer,
      teamContributionCalendarUsers.github,
      teamContributionCalendarUsers.gitlab,
    );
  }

  render() {
    return (
      <div
        className="calendarContainer"
        ref={el => {
          this.calendarContainer = el;
        }}
      />
    );
  }
}

export default TeamContributionCalendarDisplayer;
