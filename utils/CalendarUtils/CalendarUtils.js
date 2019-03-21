import DateFormat from 'dateformat';
import BasicCalendar from '../../resources/BasicCalendar/BasicCalendar.json';

const GetCurrentDateOneYearAgo = () => DateFormat(new Date(new Date().setFullYear(new Date().getFullYear() - 1)), 'yyyy-mm-dd');

const IncrementDateByOneDay = date => DateFormat(new Date(new Date(date).setDate(new Date(date).getDate() + 1)), 'yyyy-mm-dd');

export const GetTodaysCalendar = () => {
  const basicCalendarCopy = { ...BasicCalendar };
  let contributionDate = GetCurrentDateOneYearAgo();

  basicCalendarCopy.children[0].children
    .map((week, weekIndex) => week.children.forEach((day, dayIndex) => {
      if (day.attributes['data-date']) {
        basicCalendarCopy.children[0].children[weekIndex].children[dayIndex].attributes = {
          ...day.attributes,
          'data-date': contributionDate,
        };

        contributionDate = IncrementDateByOneDay(contributionDate);
      }
    }));

  return {
    ...BasicCalendar,
    ...basicCalendarCopy,
  };
};
