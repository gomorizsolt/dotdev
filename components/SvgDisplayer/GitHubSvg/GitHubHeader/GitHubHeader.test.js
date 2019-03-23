import React from 'react';
import { shallow } from 'enzyme';
import GitHubHeader from './GitHubHeader';
import ContributionsValueDisplayer from '../../../UI/ContributionsValueDisplayer/ContributionsValueDisplayer';
import { Header, ColorsList } from './GitHubHeader.style';
import * as ColorSchemas from '../../../../resources/ColorSchemas/ColorSchemas';

describe('<GitHubHeader />', () => {
  let gitHubHeaderWrapper;

  beforeEach(() => {
    gitHubHeaderWrapper = shallow(<GitHubHeader />);
  });

  it('renders Header', () => {
    expect(gitHubHeaderWrapper.find(Header)).toHaveLength(1);
  });

  it('renders ContributionsValueDisplayer', () => {
    expect(gitHubHeaderWrapper.find(ContributionsValueDisplayer)).toHaveLength(1);
  });

  it('renders ColorsList', () => {
    expect(gitHubHeaderWrapper.find(ColorsList)).toHaveLength(1);
  });

  it('renders `GitHubColorSchema` colors', () => {
    expect(gitHubHeaderWrapper.find('li')).toHaveLength(ColorSchemas.GitHubColorSchema.length);
  });
});
