import React from 'react';
import { shallow } from 'enzyme';
import GitHubContributions from './GitHubContributions';
import GitHubDataDisplayer from './GitHubDataDisplayer/GitHubDataDisplayer';
import * as ContributionsDataUtils from '../../utils/ContributionsDataUtils/ContributionsDataUtils';
import { GithubUsernames } from '../../resources/Users/Users';

jest.mock('../../utils/ContributionsDataUtils/ContributionsDataUtils', () => require
  .requireActual('../../utils/TestUtils/TestUtils')
  .mockOriginalFunctionality('../ContributionsDataUtils/ContributionsDataUtils'));

describe('<GitHubContributions />', () => {
  let gitHubContributionsWrapper;

  const parsedContributionsData = [
    { last_year: 989 },
  ];

  beforeEach(() => {
    gitHubContributionsWrapper = shallow(<GitHubContributions userNames={GithubUsernames} />);
  });

  it('calls ContributionsDataUtils.GetParsedData with `props.userNames`', () => {
    expect(ContributionsDataUtils.GetParsedData).toHaveBeenCalledWith(GithubUsernames);
  });

  it('sets the parsed data into the state', async () => {
    ContributionsDataUtils.GetParsedData.mockImplementationOnce(() => parsedContributionsData);

    gitHubContributionsWrapper = await shallow(<GitHubContributions userNames={GithubUsernames} />);

    expect(gitHubContributionsWrapper.state('contributionsData')).toEqual(parsedContributionsData);
  });

  describe('when `contributionsData` is empty', () => {
    beforeEach(() => {
      gitHubContributionsWrapper.setState({
        contributionsData: [],
      });
    });

    it('renders the loading text', () => {
      const expectedLoadingText = 'Loading ...';

      expect(gitHubContributionsWrapper.find('p').text()).toEqual(expectedLoadingText);
    });
  });

  describe('when `contributionsData` is filled', () => {
    beforeEach(() => {
      gitHubContributionsWrapper.setState({
        contributionsData: parsedContributionsData,
      });
    });

    it('renders GitHubDataDisplayer', () => {
      expect(gitHubContributionsWrapper.find(GitHubDataDisplayer)).toHaveLength(1);
    });
  });
});
