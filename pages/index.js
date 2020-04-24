import React from "react";
import { Normalize } from "styled-normalize";
import GlobalTheme from "../src/components/GlobalTheme/GlobalTheme";
import { GlobalStyle } from "../src/common/GlobalStyle/GlobalStyle";
import App from "../src/components/App/App";
import { ConfigProvider } from "../src/contexts/Config";

const indexPage = () => (
  <GlobalTheme>
    <Normalize />
    <GlobalStyle />
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </GlobalTheme>
);

export default indexPage;
