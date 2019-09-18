import { css } from "styled-components";

export const teamContributionCalendarDisplayersStyle = css`
  margin: 40px 0 0;
  text-align: center;

  .calendarContainer {
    border: none !important;

    .month,
    .wday {
      fill: ${props => props.theme.color};
    }
  }
`;
