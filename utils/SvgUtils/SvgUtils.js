import GetProxyUrl from '../GetProxyUrl/GetProxyUrl';

export const getGitHubUserSVG = async (userName) => {
  const userUrl = GetProxyUrl(userName);
  const responseData = await fetch(userUrl);

  return responseData.text()
    .then((body) => {
      const div = document.createElement('div');
      div.innerHTML = body;
      const cal = div.querySelector('.js-calendar-graph-svg');

      return cal;
    });
};
