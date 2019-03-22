import moment from 'moment';
import BasicCalendar from '../../resources/BasicCalendar/BasicCalendar.json';

export const GetTodaysCalendar = () => {
  const basicCalendarCopy = { ...BasicCalendar };
  let contributionDate = moment().subtract(1, 'years').format('YYYY-MM-DD');

  basicCalendarCopy.children[0].children
    .map((week, weekIndex) => week.children.forEach((day, dayIndex) => {
      if (day.attributes['data-date']) {
        basicCalendarCopy.children[0].children[weekIndex].children[dayIndex].attributes = {
          ...day.attributes,
          'data-date': contributionDate,
        };

        contributionDate = moment(contributionDate).add(1, 'days').format('YYYY-MM-DD');
      }
    }));

  return {
    ...BasicCalendar,
    ...basicCalendarCopy,
  };
};
