import React from 'react';
import { shallow } from 'enzyme';
import GitHubContributions from './GitHubContributions';
import GitHubDataDisplayer from './GitHubDataDisplayer/GitHubDataDisplayer';
import * as ContributionsDataUtils from '../../utils/ContributionsDataUtils/ContributionsDataUtils';
import { GithubUsernames } from '../../resources/Users/Users';

jest.mock('../../utils/ContributionsDataUtils/ContributionsDataUtils.js', () => require
  .requireActual('../../utils/TestUtils/TestUtils')
  .mockOriginalFunctionality('../ContributionsDataUtils/ContributionsDataUtils'));

describe('<GitHubContributions />', () => {
  let gitHubContributionsWrapper;

  const parsedContributionsData = [
    { last_year: 989 },
  ];

  beforeEach(async () => {
    ContributionsDataUtils.GetParsedData.mockImplementationOnce(() => parsedContributionsData);

    gitHubContributionsWrapper = await shallow(<GitHubContributions userNames={GithubUsernames} />);
  });

  it('calls ContributionsDataUtils.GetParsedData', () => {
    expect(ContributionsDataUtils.GetParsedData).toHaveBeenCalled();
  });

  it('sets the parsed data into the state', () => {
    expect(gitHubContributionsWrapper.state('contributionsData')).toEqual(parsedContributionsData);
  });

  describe('when `contributionsData` is null', () => {
    beforeEach(() => {
      gitHubContributionsWrapper.setState({
        contributionsData: null,
      });
    });

    it('renders the loading text', () => {
      const expectedLoadingText = 'Loading ...';

      expect(gitHubContributionsWrapper.find('p').text()).toEqual(expectedLoadingText);
    });
  });

  describe('when `contributionsData` is not null', () => {
    beforeEach(() => {
      gitHubContributionsWrapper.setState({
        contributionsData: parsedContributionsData,
      });
    });

    it('renders GitHubDisplayer', () => {
      expect(gitHubContributionsWrapper.find(GitHubDataDisplayer)).toHaveLength(1);
    });
  });
});
