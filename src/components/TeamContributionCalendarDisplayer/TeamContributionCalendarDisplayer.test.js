import React from "react";
import { shallow } from "enzyme";
import TeamContributionCalendarDisplayer from "./TeamContributionCalendarDisplayer";

describe("<TeamContributionCalendarDisplayer />", () => {
  let teamContributionCalendarDisplayerWrapper;

  beforeEach(() => {
    teamContributionCalendarDisplayerWrapper = shallow(<TeamContributionCalendarDisplayer />);
  });

  it("renders a div with `calendarContainer` class", () => {
    expect(teamContributionCalendarDisplayerWrapper.find(".calendarContainer")).toHaveLength(1);
  });
});
