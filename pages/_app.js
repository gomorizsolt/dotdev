import App from "next/app";
import Head from "next/head";
import React from "react";
import config from "../config/config.example.yml";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>{config.name}</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
