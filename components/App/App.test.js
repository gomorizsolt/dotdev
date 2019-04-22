import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from '../UI/Header/Header';
import CDNDisplayer from '../CDNDisplayer/CDNDisplayer';


describe('<App />', () => {
  let appWrapper;

  beforeEach(() => {
    appWrapper = shallow(<App />);
  });

  it('renders Header', () => {
    expect(appWrapper.find(Header)).toHaveLength(1);
  });

  it('renders CDNDisplayer', () => {
    expect(appWrapper.find(CDNDisplayer)).toHaveLength(1);
  });
});
