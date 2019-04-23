import React, { Fragment } from 'react';
import TeamContributionCalendarDisplayer from '../TeamContributionCalendarDisplayer/TeamContributionCalendarDisplayer';
import Header from '../UI/Header/Header';

const app = () => (
  <Fragment>
    <Header>
      <img src="static/logo/logo.png" alt="C-Hive" />
      <p>C-Hive</p>
    </Header>
    <TeamContributionCalendarDisplayer />
  </Fragment>
);

export default app;
