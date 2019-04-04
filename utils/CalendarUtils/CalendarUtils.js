import * as JavaScriptUtils from '../JavaScriptUtils/JavaScriptUtils';

export const getFillColor = (dailyContributions) => {
  let fillColor = '#ebedf0';

  if (dailyContributions > 0 && dailyContributions < 10) {
    fillColor = '#c6e48b';
  }

  if (dailyContributions >= 10 && dailyContributions < 20) {
    fillColor = '#7bc96f';
  }

  if (dailyContributions >= 20 && dailyContributions < 30) {
    fillColor = '#239a3b';
  }

  if (dailyContributions >= 30) {
    fillColor = '#196127';
  }

  return fillColor;
};

export const getCalendarDataByIndexes = (calendarData, weekIndex, dayIndex) => {
  if (JavaScriptUtils.isDefined(dayIndex)) {
    return calendarData.children[0].children[weekIndex].children[dayIndex];
  }

  return calendarData.children[0].children[weekIndex];
};
