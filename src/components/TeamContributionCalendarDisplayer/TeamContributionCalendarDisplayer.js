import React, { useEffect, useRef } from "react";
import TeamContributionCalendar from "@c-hive/team-contribution-calendar";
import styled from "styled-components";
import { useConfig } from "../../contexts/Config";
import { teamContributionCalendarDisplayerStyle } from "./TeamContributionCalendarDisplayer.style";

const TeamContributionCalendarDisplayer = styled.div`
  ${teamContributionCalendarDisplayerStyle}
`;

export default () => {
  const config = useConfig();
  const calendarRef = useRef();

  useEffect(() => {
    TeamContributionCalendar(
      calendarRef.current,
      config.teamContributionCalendarUsers.github,
      config.teamContributionCalendarUsers.gitlab
    );
  }, []);

  return (
    <TeamContributionCalendarDisplayer>
      <div className="calendarContainer" ref={calendarRef} />
    </TeamContributionCalendarDisplayer>
  );
};
