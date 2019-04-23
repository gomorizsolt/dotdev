import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from '../UI/Header/Header';
import TeamContributionCalendar from '../TeamContributionCalendar/TeamContributionCalendar';


describe('<App />', () => {
  let appWrapper;

  beforeEach(() => {
    appWrapper = shallow(<App />);
  });

  it('renders Header', () => {
    expect(appWrapper.find(Header)).toHaveLength(1);
  });

  it('renders TeamContributionCalendar', () => {
    expect(appWrapper.find(TeamContributionCalendar)).toHaveLength(1);
  });
});
