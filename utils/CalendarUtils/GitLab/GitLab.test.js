import * as GitLab from './GitLab';
import * as Proxy from '../../Proxy/Proxy';

jest.mock('../../Proxy/Proxy', () => require
  .requireActual('../../../utils/TestUtils/TestUtils')
  .mockOriginalFunctionality(
    '../Proxy/Proxy',
  ));

jest.spyOn(console, 'log').mockImplementation(() => jest.fn());

describe('GitLab', () => {
  describe('getJsonFormattedCalendar', () => {
    it('acquires the proxied GL url', () => {
      const gitLabUsername = 'fakeUsername';

      GitLab.getJsonFormattedCalendar(gitLabUsername);

      expect(Proxy.getGitLabProxyUrl).toHaveBeenCalledWith(gitLabUsername);
    });
  });

  describe('getTotalContributions', () => {
    it('returns the total contributions of the given user', () => {
      const gitHubCalendar = {
        '2018-02-03': 7,
        '2018-02-09': 3,
      };
      const expectedTotalContributions = 10;

      const actualTotalContributions = GitLab.getTotalContributions(gitHubCalendar);

      expect(actualTotalContributions).toEqual(expectedTotalContributions);
    });
  });
});
