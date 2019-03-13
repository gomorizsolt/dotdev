import * as SVGUtils from './SvgUtils';
import GetProxyUrl from '../GetProxyUrl/GetProxyUrl';

jest.mock('../GetProxyUrl/GetProxyUrl', () => require
  .requireActual('../TestUtils/TestUtils')
  .mockOriginalFunctionality('../GetProxyUrl/GetProxyUrl'));

const text = jest.fn().mockImplementationOnce(() => jest.fn());

window.fetch = jest.fn().mockImplementation(() => ({
  status: 200,
  text,
}));

describe('SVGUtils', () => {
  describe('GetGitHubUserSVG', () => {
    it('calls GetProxyUrl with `userName`', () => {
      const userName = 'test_user';

      SVGUtils.GetGitHubUserSVG(userName);

      expect(GetProxyUrl).toHaveBeenCalledWith(userName);
    });

    it('calls `text`', () => {
      const userName = 'test_user';

      SVGUtils.GetGitHubUserSVG(userName);

      expect(text).toHaveBeenCalled();
    });
  });
});
