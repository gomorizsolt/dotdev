import React from 'react';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import App from '../components/App/App';

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;

const indexPage = () => (
  <React.Fragment>
    <Head>
      <script src="https://cdn.jsdelivr.net/gh/c-hive/team-contribution-calendar/dist/team-contribution-calendar.min.js" />
    </Head>
    <Normalize />
    <GlobalStyle />
    <App />
  </React.Fragment>
);

export default indexPage;
