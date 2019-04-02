import { parseSync } from 'svgson';
import * as SvgUtils from '../SvgUtils/SvgUtils';
import * as JavaScriptUtils from '../JavaScriptUtils/JavaScriptUtils';

const getFillColor = (dataCountValue) => {
  let fillColor = '#ebedf0';

  if (dataCountValue > 0 && dataCountValue < 10) {
    fillColor = '#c6e48b';
  }

  if (dataCountValue >= 10 && dataCountValue < 20) {
    fillColor = '#7bc96f';
  }

  if (dataCountValue >= 20 && dataCountValue < 30) {
    fillColor = '#239a3b';
  }

  if (dataCountValue >= 30) {
    fillColor = '#196127';
  }

  return fillColor;
};


const getCalendarData = (calendarData, weekIndex, dayIndex) => {
  if (JavaScriptUtils.isDefined(dayIndex)) {
    return calendarData.children[0].children[weekIndex].children[dayIndex];
  }

  return calendarData.children[0].children[weekIndex];
};

export const getIncorrectFirstUserCalendarErrorMessage = () => 'The first user\'s calendar in the list is incorrect. Please read the Constraint phase in README.md so that get further information about the reason for the error.';

const normalSizedCalendarWidth = '669';

export const getParsedGitHubCalendarSync = async (userName) => {
  const userCalendar = await SvgUtils.getGitHubUserSVG(userName);

  const parsedUserCalendar = parseSync(userCalendar.outerHTML);

  if (parsedUserCalendar.attributes.width !== normalSizedCalendarWidth) {
    throw new Error(getIncorrectFirstUserCalendarErrorMessage());
  }

  return parsedUserCalendar;
};

export const mergeSvgs = (actualCalendar, nextCalendar) => {
  const copiedActualCalendar = JavaScriptUtils.deepCopyObject(actualCalendar);

  nextCalendar.children[0].children.forEach((weeklyData, weekIndex) => {
    weeklyData.children.forEach((dailyData, dayIndex) => {
      if (dailyData.attributes['data-count']) {
        const actualCalendarDailyData = getCalendarData(copiedActualCalendar, weekIndex, dayIndex);
        const sumOfContributions = Number(actualCalendarDailyData.attributes['data-count']) + Number(dailyData.attributes['data-count']);

        copiedActualCalendar.children[0].children[weekIndex].children[dayIndex].attributes = {
          ...actualCalendarDailyData.attributes,
          'data-count': String(sumOfContributions),
          fill: getFillColor(sumOfContributions),
        };
      }
    });
  });

  return copiedActualCalendar;
};

export const sumGitHubCalendarContributions = (parsedGitHubCalendar) => {
  let sum = 0;

  parsedGitHubCalendar.children[0].children.forEach((weeklyData) => {
    weeklyData.children.forEach((dailyData) => {
      if (dailyData.attributes['data-count']) {
        sum += Number(dailyData.attributes['data-count']);
      }
    });
  });

  return sum;
};
