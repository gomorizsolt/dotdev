import React, { Fragment } from "react";
import styled from "styled-components";
import { appStyle } from "./App.style";
import TeamContributionCalendarDisplayer from "../TeamContributionCalendarDisplayer/TeamContributionCalendarDisplayer";
import Header from "../Header/Header";
import Medium from "../Medium/Medium";
import Projects from "../Projects/Projects";
import OneCol from "../UI/Layout/OneCol";
import TwoCol from "../UI/Layout/TwoCol";
import Products from "../Products/Products";
import { useConfig } from "../../contexts/Config";

const App = styled.div`
  ${appStyle}
`;

export default () => {
  const config = useConfig();

  return (
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
};
