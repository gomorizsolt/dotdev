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
    margin: 1em 0 0;
  }
`;
