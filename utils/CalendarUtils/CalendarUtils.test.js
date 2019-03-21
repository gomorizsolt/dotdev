import DateFormat from 'dateformat';
import * as CalendarUtils from './CalendarUtils';

describe('CalendarUtils', () => {
  describe('GetTodaysCalendar', () => {
    it('sets the first date to the current date subtracted by one year', () => {
      const todaysBasicCalendar = CalendarUtils.GetTodaysCalendar();
      const expectedDate = DateFormat(new Date(new Date().setFullYear(new Date().getFullYear() - 1)), 'yyyy-mm-dd');

      const actualDate = todaysBasicCalendar.children[0].children[0].children[0].attributes['data-date'];

      expect(actualDate).toEqual(expectedDate);
    });

    it('sets the last date to the current date', () => {
      const todaysBasicCalendar = CalendarUtils.GetTodaysCalendar();
      const expectedDate = DateFormat(new Date(), 'yyyy-mm-dd');

      const daysWithoutMonthAndDayNames = todaysBasicCalendar.children[0].children
        .filter(el => !el.attributes.class);

      const actualDate = daysWithoutMonthAndDayNames[daysWithoutMonthAndDayNames.length - 1]
        .children[daysWithoutMonthAndDayNames[daysWithoutMonthAndDayNames.length - 1]
          .children.length - 1].attributes['data-date'];

      expect(actualDate).toEqual(expectedDate);
    });
  });
});
