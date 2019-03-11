import GetProxyUrl from '../GetProxyUrl/GetProxyUrl';

// The plan is to create another SVG fetcher for GitLab.

export const GetGitHubUserSVG = async (userName) => {
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
