import GetProxyUrl from './GetProxyUrl';

describe('GetProxyUrl', () => {
  it('returns the appropriate URL', () => {
    const username = 'testUsername';
    const expectedUrl = `https://c-hive-proxy.herokuapp.com/https://github.com/users/${username}/contributions`;

    const actualUrl = GetProxyUrl(username);

    expect(actualUrl).toEqual(expectedUrl);
  });
});
