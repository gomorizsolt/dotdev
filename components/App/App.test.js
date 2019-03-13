import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from '../UI/Header/Header';
import GitHubContributions from '../GitHubContributions/GitHubContributions';

describe('<App />', () => {
  let appWrapper;

  beforeEach(() => {
    appWrapper = shallow(<App />);
  });

  it('renders Header', () => {
    expect(appWrapper.find(Header)).toHaveLength(1);
  });

  it('renders GitHubContributions', () => {
    expect(appWrapper.find(GitHubContributions)).toHaveLength(1);
  });
});
