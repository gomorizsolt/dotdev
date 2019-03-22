import React from 'react';
import { shallow } from 'enzyme';
import GitHubDataDisplayer from './GitHubDataDisplayer';
import * as ContributionsDataUtils from '../../../utils/ContributionsDataUtils/ContributionsDataUtils';
import * as TestUtils from '../../../utils/TestUtils/TestUtils';
import { ContributionsContainer } from './GitHubDataDisplayer.style';

jest.mock('../../../utils/ContributionsDataUtils/ContributionsDataUtils', () => require
  .requireActual('../../../utils/TestUtils/TestUtils')
  .mockOriginalFunctionality('../ContributionsDataUtils/ContributionsDataUtils'));

describe('<GitHubDataDisplayer />', () => {
  let githubDataDisplayerWrapper;

  const contributionsData = TestUtils.getFakeContributionsObjectWithDailyCounts([5, 7, 0]);

  beforeEach(() => {
    ContributionsDataUtils.SumContributionsValues.mockImplementationOnce(() => jest.fn());

    githubDataDisplayerWrapper = shallow(
      <GitHubDataDisplayer
        contributionsData={contributionsData}
      />,
    );
  });

  it('renders ContributionsContainer', () => {
    expect(githubDataDisplayerWrapper.find(ContributionsContainer)).toHaveLength(1);
  });

  it('calls ContributionsDataUtils.SumContributionsValues with `contributionsData`', () => {
    expect(ContributionsDataUtils.SumContributionsValues).toHaveBeenCalledWith(contributionsData);
  });
});
