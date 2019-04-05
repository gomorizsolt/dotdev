import * as GitLab from './GitLab';
import * as Proxy from '../../Proxy/Proxy';

jest.mock('../../Proxy/Proxy', () => require
  .requireActual('../../../utils/TestUtils/TestUtils')
  .mockOriginalFunctionality(
    '../Proxy/Proxy',
  ));

describe('GitLab', () => {
  describe('getJsonFormattedCalendar', () => {
    it('acquires the proxied GL url', () => {
      const gitLabUsername = 'fakeUsername';

      GitLab.getJsonFormattedCalendar(gitLabUsername);

      expect(Proxy.getGitLabProxyUrl).toHaveBeenCalledWith(gitLabUsername);
    });
  });
});
