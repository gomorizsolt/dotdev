import { css } from "styled-components";

export const articleDisplayerStyle = css`
  text-align: left;
  margin-bottom: 1.2em;

  & > a {
    text-transform: uppercase;
    font-size: 1.4em;
    line-height: 1.3em;
  }

  & > p {
    font-size: 0.8em;
    font-style: italic;
    font-weight: 200;
    margin: 0.6em 0 0;
  }
`;
