import React, { useEffect, useRef } from "react";
import TeamContributionCalendar from "@c-hive/team-contribution-calendar";
import styled from "styled-components";
import { useConfig } from "../../contexts/Config";
import { teamContributionCalendarDisplayerStyle } from "./TeamContributionCalendarDisplayer.style";

const TeamContributionCalendarDisplayer = styled.div`
  ${teamContributionCalendarDisplayerStyle}
`;

export default () => {
  const { teamContributionCalendarUsers } = useConfig();
  const calendarRef = useRef();

  useEffect(() => {
    TeamContributionCalendar(
      calendarRef.current,
      teamContributionCalendarUsers.github,
      teamContributionCalendarUsers.gitlab
    );
  }, [
    teamContributionCalendarUsers.github,
    teamContributionCalendarUsers.gitlab,
  ]);

  return (
    <TeamContributionCalendarDisplayer>
      <div className="calendarContainer" ref={calendarRef} />
    </TeamContributionCalendarDisplayer>
  );
};
