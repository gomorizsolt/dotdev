import { css } from "styled-components";

export const teamMembersStyle = css`
  display: inline-block;

  .TeamMember {
    display: inline-block;
    padding-right: 8px;
    color: ${props => props.theme.color};
    text-decoration: none;
    line-height: 1.4em;
    transition: 0.3s;

    &:hover {
      text-decoration: underline;
    }

    &::after {
      content: ", ";
    }

    &:last-child::after {
      content: "";
    }
  }
`;
