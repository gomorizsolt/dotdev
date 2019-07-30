import React from "react";
import TeamContributionCalendarDisplayer from "../TeamContributionCalendarDisplayer/TeamContributionCalendarDisplayer";
import PageWrapper from "../UI/PageWrapper/PageWrapper";
import Articles from "../Articles/Articles";
import OneCol from "../UI/PageWrapper/Layouts/OneCol";
import TwoCol from "../UI/PageWrapper/Layouts/TwoCol";
import Projects from "../Projects/Projects";

const app = () => (
  <PageWrapper>
    <OneCol>
      <TeamContributionCalendarDisplayer />
    </OneCol>
    <TwoCol>
      <Articles />
      <Projects />
    </TwoCol>
  </PageWrapper>
);

export default app;
