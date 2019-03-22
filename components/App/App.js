import React, { Fragment } from 'react';
import SvgDisplayer from '../SvgDisplayer/SvgDisplayer';
import { Header } from './App.style';

const app = () => (
  <Fragment>
    <Header>
      <img src="static/logo/logo.png" alt="C-Hive" />
      <p>C-Hive</p>
    </Header>
    <SvgDisplayer />
  </Fragment>
);

export default app;
