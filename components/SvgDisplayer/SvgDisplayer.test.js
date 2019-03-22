import React from 'react';
import { shallow } from 'enzyme';
import SvgDisplayer from './SvgDisplayer';
import GitHubSvg from './GitHubSvg/GitHubSvg';
import { SvgDisplayerContainer } from './SvgDisplayer.style';

describe('<SvgDisplayer />', () => {
  let svgDisplayerWrapper;

  beforeEach(() => {
    svgDisplayerWrapper = shallow(<SvgDisplayer />);
  });

  it('renders SvgDisplayerContainer', () => {
    expect(svgDisplayerWrapper.find(SvgDisplayerContainer)).toHaveLength(1);
  });

  it('renders GitHubSvg', () => {
    expect(svgDisplayerWrapper.find(GitHubSvg)).toHaveLength(1);
  });
});
