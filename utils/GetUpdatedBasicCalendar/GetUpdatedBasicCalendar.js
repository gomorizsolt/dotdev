import BasicCalendar from '../../resources/BasicCalendar/BasicCalendar.json';

const GetCurrentDateOneYearAgo = () => new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toLocaleDateString().replace(/. /g, '-').slice(0, 10);

const IncrementDateByOneDay = date => new Date(new Date(date)
  .setDate(new Date(date).getDate() + 1)).toLocaleDateString().replace(/. /g, '-').slice(0, 10);

export const GetUpdatedBasicCalendar = () => {
  let contributionDate = GetCurrentDateOneYearAgo();

  BasicCalendar.children[0].children.map(element => element.children.forEach((day) => {
    if (day.attributes['data-date']) {
      const currentDay = { ...day };

      currentDay.attributes['data-date'] = contributionDate;

      contributionDate = IncrementDateByOneDay(contributionDate);
    }
  }));

  return BasicCalendar;
};
