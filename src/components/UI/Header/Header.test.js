import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { HeaderContainer } from './Header.style';

describe('<Header />', () => {
  let headerWrapper;

  beforeEach(() => {
    headerWrapper = shallow(<Header />);
  });

  it('renders HeaderContainer', () => {
    expect(headerWrapper.find(HeaderContainer)).toHaveLength(1);
  });

  it('renders the logo', () => {
    expect(headerWrapper.find('img')).toHaveLength(1);
  });

  it('renders the `C-Hive` text', () => {
    expect(headerWrapper.find('p').text()).toEqual('C-Hive');
  });
});
