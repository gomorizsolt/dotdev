import React from 'react';
import { shallow } from 'enzyme';
import TeamContributionCalendar from './TeamContributionCalendar';

describe('<TeamContributionCalendar />', () => {
  let teamContributionCalendarWrapper;

  const TeamContributionCalendarSpy = jest.fn();

  beforeEach(() => {
    window.TeamContributionCalendar = TeamContributionCalendarSpy;

    teamContributionCalendarWrapper = shallow(<TeamContributionCalendar />);
  });

  it('renders a div with `calendarContainer` class', () => {
    expect(teamContributionCalendarWrapper.find('.calendarContainer')).toHaveLength(1);
  });

  it('calls `window.TeamContributionCalendar`', () => {
    expect(TeamContributionCalendarSpy).toHaveBeenCalled();
  });
});
