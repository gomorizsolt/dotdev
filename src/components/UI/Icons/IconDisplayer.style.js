import { css } from "styled-components";

export const iconDisplayerStyle = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  img {
    width: 34px;
    height: 34px;
    display: inline-block;
    flex-shrink: 0;
    font-size: 24px;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    user-select: none;
  }
`;
