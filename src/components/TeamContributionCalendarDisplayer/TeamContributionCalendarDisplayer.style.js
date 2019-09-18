import { css } from "styled-components";

export const teamContributionCalendarDisplayersStyle = css`
  text-align: center;

  .calendarContainer {
    border: none !important;

    .month,
    .wday {
      fill: ${props => props.theme.color};
    }
  }
`;
