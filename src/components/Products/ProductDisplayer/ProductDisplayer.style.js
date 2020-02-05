import { css } from "styled-components";

export const productDisplayerStyle = css`
  display: flex;
  margin: 0px 0 40px 0;

  .Card {
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.cardBackground};
    transition: background 0.9s;

    .MuiCardMedia-root {
      height: 145px;
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

  & > div {
    margin-left: auto;
  }

  img {
    margin-right: 8px;
    height: 28px;
    width: 28px;
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
