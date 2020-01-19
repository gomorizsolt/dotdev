import { css } from "styled-components";

export const teamContributionCalendarDisplayerStyle = css`
  margin: 40px 0 0;
  text-align: center;

  .calendarContainer {
    border: none !important;
    min-width: 415px !important;
    max-width: 800px !important;
    width: 58% !important;

    .month,
    .wday {
      fill: ${props => props.theme.color};
    }
  }
`;
