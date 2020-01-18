import { css } from "styled-components";

export const iconDisplayerStyle = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  margin-right: 8px;
  background: ${props => props.backgroundColor};
  border-radius: 50%;

  img {
    width: 0.7em;
    height: 0.7em;
    display: inline-block;
    flex-shrink: 0;
    font-size: 24px;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    user-select: none;
  }
`;
