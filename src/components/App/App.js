import React from "react";
import TeamContributionCalendarDisplayer from "../TeamContributionCalendarDisplayer/TeamContributionCalendarDisplayer";
import PageWrapper from "../UI/PageWrapper/PageWrapper";
import Medium from "../Medium/Medium";
import OneCol from "../UI/PageWrapper/Layouts/OneCol";
import TwoCol from "../UI/PageWrapper/Layouts/TwoCol";

const app = () => (
  <PageWrapper>
    <OneCol>
      <TeamContributionCalendarDisplayer />
    </OneCol>
    <TwoCol>
      <Medium />
    </TwoCol>
  </PageWrapper>
);

export default app;
