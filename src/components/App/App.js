import React from "react";
import TeamContributionCalendarDisplayer from "../TeamContributionCalendarDisplayer/TeamContributionCalendarDisplayer";
import PageWrapper from "../UI/PageWrapper/PageWrapper";
import Articles from "../Articles/Articles";

const app = () => (
  <PageWrapper>
    <TeamContributionCalendarDisplayer />
    <Articles />
  </PageWrapper>
);

export default app;
