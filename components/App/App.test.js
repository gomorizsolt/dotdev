import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { Header, Title } from './App.style';

describe('<App />', () => {
  let appWrapper;

  beforeEach(() => {
    appWrapper = shallow(<App />);
  });

  it('renders a Header', () => {
    expect(appWrapper.find(Header)).toHaveLength(1);
  });

  it('renders a Title', () => {
    expect(appWrapper.find(Title)).toHaveLength(1);
  });

  it('renders the `C-Hive` text', () => {

  });
});
