import svgson from 'svgson';
import * as SVGUtils from '../SvgUtils/SvgUtils';

export const GetParsedData = async (userNames) => {
  const parsedData = userNames.map(async (userName) => {
    const userSVG = await SVGUtils.GetGitHubUserSVG(userName);

    return svgson.parse(userSVG.outerHTML);
  });

  return Promise.all(parsedData).then(contributionsData => contributionsData);
};

const SumWeekData = (weekData) => {
  const sum = weekData.reduce((a, b) => {
    if (b.attributes['data-count']) {
      return a + Number(b.attributes['data-count']);
    }

    return a + 0;
  }, 0);

  return sum;
};

export const SumContributionsValues = contributionsData => contributionsData
  .map(svgData => svgData.children[0].children.map((weekData) => {
    const weekDataSum = SumWeekData(weekData.children);

    return weekDataSum;
  })).reduce((a, b) => a.concat(b), []).reduce((a, b) => a + b, 0);
