import BasicCalendar from '../../resources/BasicCalendar/BasicCalendar.json';

const GetCurrentDateOneYearAgo = () => new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toLocaleDateString().replace(/. /g, '-').slice(0, 10);

const IncrementDateByOneDay = date => new Date(new Date(date)
  .setDate(new Date(date).getDate() + 1)).toLocaleDateString().replace(/. /g, '-').slice(0, 10);

const GetUpToDateCalendar = () => {
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

export default GetUpToDateCalendar;
