import { parse, parseSync } from 'svgson';
import * as JavaScriptUtils from '../JavaScriptUtils/JavaScriptUtils';
import * as CalendarUtils from '../CalendarUtils/CalendarUtils';
import * as Proxy from '../Proxy/Proxy';

export const getIncorrectFirstUserCalendarErrorMessage = () => 'The first user\'s calendar in the list is incorrect. Please read the Constraint phase in README.md so that get further information about the reason for the error.';

const getCurrentUserSvg = async (userName) => {
  const userUrl = Proxy.getGitHubProxyUrl(userName);
  const responseData = await fetch(userUrl);

  return responseData.text()
    .then((body) => {
      const div = document.createElement('div');
      div.innerHTML = body;
      const rawUserSVG = div.querySelector('.js-calendar-graph-svg');

      return rawUserSVG;
    });
};

export const getJsonFormattedCalendarSync = async (gitHubUsername) => {
  const userCalendar = await getCurrentUserSvg(gitHubUsername);

  return parseSync(userCalendar.outerHTML);
};

export const mergeCalendars = (actualCalendar, currentUserJsonCalendar) => {
  const copiedActualCalendar = JavaScriptUtils.deepCopyObject(actualCalendar);

  currentUserJsonCalendar.children[0].children.forEach((weeklyData, weekIndex) => {
    weeklyData.children.forEach((dailyData, dayIndex) => {
      if (dailyData.attributes['data-count']) {
        const actualCalendarDailyData = CalendarUtils
          .getCalendarDataByIndexes(copiedActualCalendar, weekIndex, dayIndex);
        const dailyTotalContributions = Number(actualCalendarDailyData.attributes['data-count']) + Number(dailyData.attributes['data-count']);

        copiedActualCalendar.children[0].children[weekIndex].children[dayIndex].attributes = {
          ...actualCalendarDailyData.attributes,
          'data-count': String(dailyTotalContributions),
          fill: CalendarUtils.getFillColor(dailyTotalContributions),
        };
      }
    });
  });

  return copiedActualCalendar;
};

export const getTotalContributions = (parsedGitHubCalendar) => {
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

export const getJsonFormattedCalendar = async (gitHubUsername) => {
  const rawUserSvg = await getCurrentUserSvg(gitHubUsername);

  return parse(rawUserSvg.outerHTML)
    .then(parsedGitHubCalendar => parsedGitHubCalendar);
};
