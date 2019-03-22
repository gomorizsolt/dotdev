import React from 'react';
import { shallow } from 'enzyme';
import GitHubFooter from './GitHubFooter';
import { ContributionsFooter, ColorsList } from './GitHubFooter.style';
import * as ColorSchemas from '../../../../resources/ColorSchemas/ColorSchemas';

describe('<GitHubFooter />', () => {
  let gitHubFooterWrapper;

  beforeEach(() => {
    gitHubFooterWrapper = shallow(<GitHubFooter />);
  });

  it('renders ContributionsFooter', () => {
    expect(gitHubFooterWrapper.find(ContributionsFooter)).toHaveLength(1);
  });

  it('renders ColorsList', () => {
    expect(gitHubFooterWrapper.find(ColorsList)).toHaveLength(1);
  });

  it('renders `GitHubColorSchema` colors', () => {
    expect(gitHubFooterWrapper.find('li')).toHaveLength(ColorSchemas.GitHubColorSchema.length);
  });
});
