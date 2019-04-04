import * as Proxy from '../Proxy/Proxy';
import * as JavaScriptUtils from '../JavaScriptUtils/JavaScriptUtils';
import * as CalendarUtils from '../CalendarUtils/CalendarUtils';

export const getJsonFormattedCalendar = async (gitLabUsername) => {
  const url = Proxy.getGitLabProxyUrl(gitLabUsername);
  const userCalendar = await fetch(url);

  return userCalendar.json()
    .then(parsedUserCalendar => parsedUserCalendar);
};

const getSpecificDateContributions = (gitLabCalendar, date) => {
  if (gitLabCalendar[date]) {
    return gitLabCalendar[date];
  }

  return 0;
};

export const mergeCalendars = (actualCalendar, gitLabCalendar) => {
  const copiedActualCalendar = JavaScriptUtils.deepCopyObject(actualCalendar);

  copiedActualCalendar.children[0].children.forEach((weeklyData, weekIndex) => {
    weeklyData.children.forEach((dailyData, dayIndex) => {
      if (dailyData.attributes['data-count']) {
        const actualCalendarDailyData = CalendarUtils
          .getCalendarDataByIndexes(actualCalendar, weekIndex, dayIndex);
        const dailyTotalContributions = Number(actualCalendarDailyData.attributes['data-count']) + getSpecificDateContributions(gitLabCalendar, actualCalendarDailyData.attributes['data-date']);

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

export const getTotalContributions = (gitLabCalendar) => {
  let sum = 0;

  Object.keys(gitLabCalendar).forEach((date) => {
    sum += gitLabCalendar[date];
  });

  return sum;
};
