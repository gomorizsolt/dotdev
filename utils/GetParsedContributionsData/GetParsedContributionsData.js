import SvgParser from 'github-calendar-parser';
import { GetGitHubUserSVG } from '../GetUserSvgUtils/GetUserSvgUtils';

const getParsedContributionsData = async (userNames) => {
  const parsedData = userNames.map(async (userName) => {
    const userSVG = await GetGitHubUserSVG(userName);

    return SvgParser(userSVG.outerHTML);
  });

  return Promise.all(parsedData).then(contributionsData => contributionsData);
};

export default getParsedContributionsData;
