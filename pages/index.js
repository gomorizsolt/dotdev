import React from "react";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "../src/contexts/Theme";
import { GlobalStyle } from "../src/common/GlobalStyle/GlobalStyle";
import App from "../src/components/App/App";

const indexPage = () => (
  <ThemeProvider>
    <Normalize />
    <GlobalStyle />
    <App />
  </ThemeProvider>
);

export default indexPage;
