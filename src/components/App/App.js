import React, { Fragment } from "react";
import styled from "styled-components";
import TeamContributionCalendarDisplayer from "../TeamContributionCalendarDisplayer/TeamContributionCalendarDisplayer";
import Header from "../Header/Header";
import settings from "../../../settings/settings.json";
import Medium from "../Medium/Medium";
import Projects from "../Projects/Projects";
import OneCol from "../UI/Layout/OneCol";
import TwoCol from "../UI/Layout/TwoCol";
import { appStyle } from "./App.style";

const App = styled.div`
  ${appStyle}
`;

const app = () => (
  <Fragment>
    <Header />
    <App>
      <OneCol>
        {settings.teamContributionCalendarUsers ? (
          <TeamContributionCalendarDisplayer />
        ) : null}
      </OneCol>
      <TwoCol>
        {settings.medium ? <Medium /> : null}
        {settings.github ? <Projects /> : null}
      </TwoCol>
    </App>
  </Fragment>
);

export default app;
