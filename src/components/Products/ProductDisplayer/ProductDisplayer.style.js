import { css } from "styled-components";

export const productDisplayerStyle = css`
  display: flex;
  margin: 0px 0 40px 0;

  .Card {
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.cardBackground};
    transition: background 0.9s;

    .MuiButton-root {
      color: ${props => props.theme.color};
    }
  }

  .MuiCardActions-spacing .action__techIcons {
    margin: 0 8px 0 auto;
  }
`;

export const productTitleStyle = css`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.4em;
  line-height: 1.3em;

  img {
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }
`;
export const actionTechIconsStyle = css`
  a {
    display: inline-block;
  }

  img {
    width: 28px;
    height: 28px;
  }
`;
