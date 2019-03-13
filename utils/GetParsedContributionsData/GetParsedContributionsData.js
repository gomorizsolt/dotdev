import SvgParser from 'github-calendar-parser';
import * as SVGUtils from '../SvgUtils/SvgUtils';

const getParsedContributionsData = async (userNames) => {
  const parsedData = userNames.map(async (userName) => {
    const userSVG = await SVGUtils.GetGitHubUserSVG(userName);

    return SvgParser(userSVG.outerHTML);
  });

  return Promise.all(parsedData).then(contributionsData => contributionsData);
};

export default getParsedContributionsData;
