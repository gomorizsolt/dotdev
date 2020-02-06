import { css } from "styled-components";

export const productStyle = css`
  display: flex;
  margin: 0px 0 40px 0;

  .Card {
    width: 100%;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.cardBackground};
    transition: background 0.9s;

    .MuiCardMedia-root {
      height: 145px;
    }
    .MuiCardContent-root {
      padding-bottom: 55px;
    }

    .MuiCardActions-root {
      bottom: 8px;
      position: absolute;
    }
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
    margin-right: 4px;
    height: 24px;
    width: 24px;
  }
`;

export const technologiesIconsContainerStyle = css`
  margin-left: auto;
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
