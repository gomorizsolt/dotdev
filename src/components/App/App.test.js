import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import TeamContributionCalendarDisplayer from "../TeamContributionCalendarDisplayer/TeamContributionCalendarDisplayer";

describe("<App />", () => {
  let appWrapper;

  beforeEach(() => {
    appWrapper = shallow(<App />);
  });

  it("renders `TeamContributionCalendarDisplayer`", () => {
    expect(appWrapper.find(TeamContributionCalendarDisplayer)).toHaveLength(1);
  });
});
