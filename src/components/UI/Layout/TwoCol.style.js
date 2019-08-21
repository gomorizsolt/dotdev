import { css } from "styled-components";
import media from "../../../common/MediaQueries/MediaQueries";

export const twoColStyle = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > div {
    width: 48%;

    ${media.large`
      width: 100%;
   `}
  }
`;
