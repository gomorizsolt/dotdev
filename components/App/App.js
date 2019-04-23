import React, { Fragment } from 'react';
import TeamContributionCalendar from '../TeamContributionCalendar/TeamContributionCalendar';
import Header from '../UI/Header/Header';

const app = () => (
  <Fragment>
    <Header>
      <img src="static/logo/logo.png" alt="C-Hive" />
      <p>C-Hive</p>
    </Header>
    <TeamContributionCalendar />
  </Fragment>
);

export default app;
