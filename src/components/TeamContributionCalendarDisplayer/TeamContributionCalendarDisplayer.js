import React, { useEffect, useRef } from "react";
import TeamContributionCalendar from "@c-hive/team-contribution-calendar";
import styled from "styled-components";
import { useConfig } from "../../contexts/Config";
import { calendarContainerStyle } from "./TeamContributionCalendarDisplayer.style";

const CalendarContainer = styled.div`
  ${calendarContainerStyle}
`;

const TeamContributionCalendarDisplayer = () => {
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
    <CalendarContainer>
      <div className="calendarContainer" ref={calendarRef} />
    </CalendarContainer>
  );
};

export default TeamContributionCalendarDisplayer;
