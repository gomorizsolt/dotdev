import GetProxyUrl from '../GetProxyUrl/GetProxyUrl';

const getUserSVG = async (username) => {
  const userUrl = GetProxyUrl(username);
  const responseData = await fetch(userUrl);

  return responseData.text()
    .then((body) => {
      const div = document.createElement('div');
      div.innerHTML = body;
      const cal = div.querySelector('.js-calendar-graph-svg');

      return cal;
    });
};

export default getUserSVG;
