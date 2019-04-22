import React, { Fragment } from 'react';
import CDNDisplayer from '../CDNDisplayer/CDNDisplayer';
import Header from '../UI/Header/Header';

const app = () => (
  <Fragment>
    <Header>
      <img src="static/logo/logo.png" alt="C-Hive" />
      <p>C-Hive</p>
    </Header>
    <CDNDisplayer />
  </Fragment>
);

export default app;
