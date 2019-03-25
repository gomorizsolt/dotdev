import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from '../UI/Header/Header';
import SvgDisplayer from '../SvgDisplayer/SvgDisplayer';

describe('<App />', () => {
  let appWrapper;

  beforeEach(() => {
    appWrapper = shallow(<App />);
  });

  it('renders Header', () => {
    expect(appWrapper.find(Header)).toHaveLength(1);
  });

  it('renders SvgDisplayer', () => {
    expect(appWrapper.find(SvgDisplayer)).toHaveLength(1);
  });
});
