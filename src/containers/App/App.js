import React, { Fragment } from "react";
import styled from "styled-components";
import TeamContributionCalendarDisplayer from "../../components/TeamContributionCalendarDisplayer/TeamContributionCalendarDisplayer";
import Header from "../../components/Header/Header";
import Medium from "../../components/Medium/Medium";
import OneCol from "../../components/UI/Layout/OneCol";
import TwoCol from "../../components/UI/Layout/TwoCol";
import { appStyle } from "./App.style";

const App = styled.div`
  ${appStyle}
`;

const app = () => (
  <Fragment>
    <Header />
    <App>
      <OneCol>
        <TeamContributionCalendarDisplayer />
      </OneCol>
      <TwoCol>
        <Medium />
      </TwoCol>
    </App>
  </Fragment>
);

export default app;
