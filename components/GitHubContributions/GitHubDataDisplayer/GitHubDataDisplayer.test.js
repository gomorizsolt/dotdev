import React from 'react';
import { shallow } from 'enzyme';
import GitHubDataDisplayer from './GitHubDataDisplayer';
import * as ContributionsDataUtils from '../../../utils/ContributionsDataUtils/ContributionsDataUtils';
import { ContributionsContainer } from './GitHubDataDisplayer.style';

jest.mock('../../../utils/ContributionsDataUtils/ContributionsDataUtils');

describe('<GitHubDataDisplayer />', () => {
  let githubDataDisplayerWrapper;

  const contributionsData = [
    { last_year: 989 },
    { current_streak: 62 },
    { longest_streak: 12 },
  ];

  beforeEach(() => {
    ContributionsDataUtils.SumValuesByProp.mockReset();

    githubDataDisplayerWrapper = shallow(
      <GitHubDataDisplayer
        contributionsData={contributionsData}
      />,
    );
  });

  it('renders ContributionsContainer', () => {
    expect(githubDataDisplayerWrapper.find(ContributionsContainer)).toHaveLength(1);
  });

  it('calls ContributionsDataUtils.SumValuesByProp three times', () => {
    expect(ContributionsDataUtils.SumValuesByProp).toHaveBeenCalledTimes(3);
  });
});
