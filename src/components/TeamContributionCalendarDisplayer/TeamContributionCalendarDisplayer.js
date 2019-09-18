import React, { Component } from "react";
import TeamContributionCalendar from "@c-hive/team-contribution-calendar";
import styled from "styled-components";
import settings from "../../../settings/settings.json";
import { teamContributionCalendarDisplayersStyle } from "./TeamContributionCalendarDisplayer.style";

const TeamContributionCalendarDisplayer = styled.div`
  ${teamContributionCalendarDisplayersStyle}
`;

class teamContributionCalendarDisplayer extends Component {
  constructor(props) {
    super(props);

    this.calendarContainer = null;
  }

  componentDidMount() {
    TeamContributionCalendar(
      this.calendarContainer,
      settings.teamContributionCalendarUsers.github,
      settings.teamContributionCalendarUsers.gitlab
    );
  }

  render() {
    return (
      <TeamContributionCalendarDisplayer>
        <div
          className="calendarContainer"
          ref={el => {
            this.calendarContainer = el;
          }}
        />
      </TeamContributionCalendarDisplayer>
    );
  }
}

export default teamContributionCalendarDisplayer;
