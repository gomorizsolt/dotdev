import SvgParser from 'github-calendar-parser';
import * as SVGUtils from '../SvgUtils/SvgUtils';

export const GetParsedData = async (userNames) => {
  const parsedData = userNames.map(async (userName) => {
    const userSVG = await SVGUtils.GetGitHubUserSVG(userName);

    return SvgParser(userSVG.outerHTML);
  });

  return Promise.all(parsedData).then(contributionsData => contributionsData);
};

export const SumValuesByProp = (data, propName) => {
  const sum = data.reduce((a, b) => a + b[propName], 0);

  return sum;
};
