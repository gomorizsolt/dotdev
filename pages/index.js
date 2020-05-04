import React from "react";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "../src/common/GlobalStyle/GlobalStyle";
import App from "../src/components/App/App";
import { ThemeProvider } from "../src/contexts/Theme";
import { ConfigProvider } from "../src/contexts/Config";

const indexPage = () => (
  <ThemeProvider>
    <Normalize />
    <GlobalStyle />
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </ThemeProvider>
);

export default indexPage;
