import * as ContributionsDataUtils from './ContributionsDataUtils';
import * as TestUtils from '../TestUtils/TestUtils';

jest.mock('../SvgUtils/SvgUtils', () => require
  .requireActual('../TestUtils/TestUtils')
  .mockOriginalFunctionality('../SvgUtils/SvgUtils'));

describe('ContributionsDataUtils', () => {
  describe('SumContributionsValues', () => {
    it('returns the sum of contributions', () => {
      const fakeContributionsData = TestUtils.getFakeContributionsObjectWithDailyCounts([5, 7, 0]);
      const expectedSum = 12;

      const actualSum = ContributionsDataUtils.SumContributionsValues(fakeContributionsData);

      expect(actualSum).toEqual(expectedSum);
    });
  });
});
