import { css } from "styled-components";

export const productDisplayerStyle = css`
  display: flex;

  .Card {
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.background};
  }

  .product__title {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 1.4em;
    line-height: 1.3em;

    img {
      width: 32px;
      height: 32px;
      margin-right: 8px;
    }
  }

  .MuiCardActions-spacing .action__techIcons {
    margin: 0 8px 0 auto;
  }
`;
