import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from '../UI/Header/Header';
import TeamContributionCalendarDisplayer from '../TeamContributionCalendarDisplayer/TeamContributionCalendarDisplayer';


describe('<App />', () => {
  let appWrapper;

  beforeEach(() => {
    appWrapper = shallow(<App />);
  });

  it('renders Header', () => {
    expect(appWrapper.find(Header)).toHaveLength(1);
  });

  it('renders `TeamContributionCalendarDisplayer`', () => {
    expect(appWrapper.find(TeamContributionCalendarDisplayer)).toHaveLength(1);
  });
});
