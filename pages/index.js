import React from "react";
import Head from "next/head";
import { Normalize } from "styled-normalize";
import GlobalTheme from "../src/components/GlobalTheme/GlobalTheme";
import { GlobalStyle } from "../src/common/GlobalStyle/GlobalStyle";
import App from "../src/components/App/App";

const indexPage = () => (
  <GlobalTheme>
    <Head>
      <link rel="shortcut icon" href="./favicon.ico" />
    </Head>
    <Normalize />
    <GlobalStyle />
    <App />
  </GlobalTheme>
);

export default indexPage;
