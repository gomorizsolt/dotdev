import React, { Fragment } from "react";
import styled from "styled-components";
import { appContainerStyle } from "./App.style";
import TeamContributionCalendarDisplayer from "../TeamContributionCalendarDisplayer/TeamContributionCalendarDisplayer";
import Header from "../Header/Header";
import Medium from "../Medium/Medium";
import Projects from "../Projects/Projects";
import OneCol from "../UI/Layout/OneCol";
import TwoCol from "../UI/Layout/TwoCol";
import Products from "../Products/Products";
import { useConfig } from "../../contexts/Config";

const AppContainer = styled.div`
  ${appContainerStyle}
`;

const App = () => {
  const {
    teamContributionCalendarUsers,
    products,
    medium,
    github,
  } = useConfig();

  return (
    <Fragment>
      <Header />
      <AppContainer>
        <OneCol>
          {teamContributionCalendarUsers && (
            <TeamContributionCalendarDisplayer />
          )}
        </OneCol>
        <OneCol>{products && <Products />}</OneCol>
        <TwoCol>
          {medium && <Medium />}
          {github && <Projects />}
        </TwoCol>
      </AppContainer>
    </Fragment>
  );
};

export default App;
