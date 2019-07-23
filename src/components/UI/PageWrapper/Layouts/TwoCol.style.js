import { css } from "styled-components";

export const twoColStyle = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > div {
    width: 48%;
  }
`;
