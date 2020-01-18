import { css } from "styled-components";

export const iconDisplayerStyle = css`
  background: #61dafb;
  border-radius: 50%;
  padding: 7px;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  img {
    fill: #fff;
    width: 0.8em;
    height: 0.8em;
    display: inline-block;
    font-size: 24px;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    user-select: none;
    flex-shrink: 0;
  }
`;
