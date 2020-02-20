import { css } from "styled-components";

export const headerIconsContainerStyle = css`
  display: flex;
  align-items: center;
  flex-basis: 100%;
  width: 100%;
  margin: 0px 20px 10px 20px;

  .border {
    border-left: 1px solid ${props => props.theme.color};
    margin: 0 10px 0 8px;
    height: 1.3em;
    transition: 0.3s;
    opacity: 0.3;
  }
`;

export const headerStyle = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 70px;
  max-width: 95vw;
  margin: 0px auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const logoTextStyle = css`
  font-size: 1.5em;
  font-weight: 600;
  cursor: default;
`;

export const logoStyle = css`
  max-height: 68px;
  max-width: 68px;
  margin: 16px 15px 15px 20px;
`;
