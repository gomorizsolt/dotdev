import { css } from "styled-components";

export const headerStyle = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 70px;
  max-width: 95vw;
  margin: 0px auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  .Logo {
    max-height: 68px;
    max-width: 68px;
    margin: 16px 15px 15px 20px;
  }

  .Logo__text {
    font-size: 1.5em;
    font-weight: 600;
    cursor: default;
  }

  .icons__container {
    flex-basis: 100%;
    width: 100%;
    margin: -5px 0 10px 20px;
  }
`;
