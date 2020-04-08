import React, { Fragment } from "react";
import styled from "styled-components";
import { appStyle } from "./App.style";
import TeamContributionCalendarDisplayer from "../TeamContributionCalendarDisplayer/TeamContributionCalendarDisplayer";
import Header from "../Header/Header";
import config from "../../../config/config.yml";
import Medium from "../Medium/Medium";
import Projects from "../Projects/Projects";
import OneCol from "../UI/Layout/OneCol";
import TwoCol from "../UI/Layout/TwoCol";
import Products from "../Products/Products";

const App = styled.div`
  ${appStyle}
`;

export default () => (
  <Fragment>
    <Header />
    <App>
      <OneCol>
        {config.teamContributionCalendarUsers ? (
          <TeamContributionCalendarDisplayer />
        ) : null}
      </OneCol>
      <OneCol>{config.products && <Products />}</OneCol>
      <TwoCol>
        {config.medium ? <Medium /> : null}
        {config.github ? <Projects /> : null}
      </TwoCol>
    </App>
  </Fragment>
);
