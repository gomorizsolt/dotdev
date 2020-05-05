import { css } from "styled-components";

export const teamMembersContainerStyle = css`
  display: inline-block;

  .TeamMember {
    display: inline-block;
    padding: 0 1px 0 2px;
    color: ${props => props.theme.color};
    text-decoration: none;
    line-height: 1.4em;
    transition: 0.3s;

    &:hover {
      text-decoration: underline;
    }
  }
`;
