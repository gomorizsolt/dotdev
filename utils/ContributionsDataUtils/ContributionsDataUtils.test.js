import * as ContributionsDataUtils from './ContributionsDataUtils';
import * as SVGUtils from '../SvgUtils/SvgUtils';
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

  describe('SumPropValues', () => {
    const data = [
      { last_year: 500 },
      { last_year: 600 },
    ];

    it('summarizes the values based on the given property name ', () => {
      const expectedValue = data[0].last_year + data[1].last_year;

      const actualValue = ContributionsDataUtils.SumValuesByProp(data, 'last_year');

      expect(actualValue).toEqual(expectedValue);
    });
  });
});
