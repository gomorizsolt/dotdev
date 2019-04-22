import React from 'react';
import { shallow } from 'enzyme';
import CDNDisplayer from './CDNDisplayer';

describe('<CDNDisplayer />', () => {
  let cdnDisplayerWrapper;
  const TeamContributionCalendarSpy = jest.fn();

  beforeEach(() => {
    window.TeamContributionCalendar = TeamContributionCalendarSpy;

    cdnDisplayerWrapper = shallow(<CDNDisplayer />);
  });

  it('renders a div with `container` class', () => {
    expect(cdnDisplayerWrapper.find('.container')).toHaveLength(1);
  });

  it('calls `TeamContributionCalendar`', () => {
    expect(TeamContributionCalendarSpy).toHaveBeenCalled();
  });
});
