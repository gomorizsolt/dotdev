import Head from "next/head";
import React from "react";
// The CI would complain about the missing config file if the rule was not ignored.
// Reason: at build-time, the config comes from an environment variable so it's not committed directly to the repository.
// eslint-disable-next-line import/no-unresolved
import config from "../config/config.yml";

const app = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>{config.name}</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default app;
