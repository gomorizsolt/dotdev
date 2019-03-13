import SvgParser from 'github-calendar-parser';
import * as SVGUtils from '../SvgUtils/SvgUtils';

export const GetParsedData = async (userNames) => {
  const parsedData = userNames.map(async (userName) => {
    const userSVG = await SVGUtils.GetGitHubUserSVG(userName);

    return SvgParser(userSVG.outerHTML);
  });

  return Promise.all(parsedData).then(contributionsData => contributionsData);
};

export const SumPropValues = (contributionsData, propName) => {
  const sum = contributionsData.reduce((a, b) => a + b[propName], 0);

  return sum;
};
