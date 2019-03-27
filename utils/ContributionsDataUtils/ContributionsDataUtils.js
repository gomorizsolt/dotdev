const SumWeekData = (weekData) => {
  const sum = weekData.reduce((a, b) => {
    if (b.attributes['data-count']) {
      return a + Number(b.attributes['data-count']);
    }

    return a + 0;
  }, 0);

  return sum;
};

export const SumContributionsValues = usersParsedContributionSvgs => usersParsedContributionSvgs
  .map(svgData => svgData.children[0].children.map((weekData) => {
    const weekDataSum = SumWeekData(weekData.children);

    return weekDataSum;
  })).reduce((a, b) => a.concat(b), []).reduce((a, b) => a + b, 0);
