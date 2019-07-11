import { css } from "styled-components";

export const globalThemeStyle = css`
  .loader {
    display: inline-block;
    width: 64px;
    height: 64px;
  }
  .loader:after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #325359;
    border-color: #325359 transparent #325359 transparent;
    animation: loader 1.2s linear infinite;
  }
  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
