import React from "react";
import Head from "next/head";
import { Normalize } from "styled-normalize";
import readConfig from "../scripts/read-config";
import { GlobalStyle } from "../src/common/GlobalStyle/GlobalStyle";
import App from "../src/components/App/App";
import { ThemeProvider } from "../src/contexts/Theme";
import { ConfigProvider } from "../src/contexts/Config";

const indexPage = ({ config }) => (
  <>
    <Head>
      <title>title</title>
    </Head>
    <ThemeProvider>
      <Normalize />
      <GlobalStyle />
      <ConfigProvider config={config}>
        <App />
      </ConfigProvider>
    </ThemeProvider>
  </>
);

export async function getStaticProps() {
  // getStaticProps() is limited for pages: https://nextjs.org/docs/basic-features/data-fetching#only-allowed-in-a-page
  const config = readConfig();

  return {
    props: {
      config,
    },
  };
}

export default indexPage;
