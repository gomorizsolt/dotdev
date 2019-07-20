import { css } from "styled-components";

export const articleDisplayerStyle = css`
  text-align: left;

  & > a {
    text-transform: uppercase;
    font-size: 23px;
  }

  & > p {
    font-size: 12px;
    font-style: italic;
  }
`;
