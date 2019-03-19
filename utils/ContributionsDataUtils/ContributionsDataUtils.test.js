import * as ContributionsDataUtils from './ContributionsDataUtils';
import * as SVGUtils from '../SvgUtils/SvgUtils';
import * as TestUtils from '../TestUtils/TestUtils';
import { GithubUsernames } from '../../resources/Users/Users';

jest.mock('../SvgUtils/SvgUtils', () => require
  .requireActual('../TestUtils/TestUtils')
  .mockOriginalFunctionality('../SvgUtils/SvgUtils'));

describe('ContributionsDataUtils', () => {
  describe('GetParsedData', () => {
    it('calls SVGUtils.GetGitHubUserSVG', () => {
      ContributionsDataUtils.GetParsedData(GithubUsernames);

      expect(SVGUtils.GetGitHubUserSVG).toHaveBeenCalled();
    });
  });

  describe('SumContributionsValues', () => {
    it('returns the sum of contributions', () => {
      const fakeContributionsData = TestUtils.getFakeContributionsObjectWithDailyCounts([5, 7, 0]);
      const expectedSum = 12;

      const actualSum = ContributionsDataUtils.SumContributionsValues(fakeContributionsData);

      expect(actualSum).toEqual(expectedSum);
    });
  });
});
