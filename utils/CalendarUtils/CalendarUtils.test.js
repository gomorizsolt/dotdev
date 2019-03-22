import moment from 'moment';
import * as CalendarUtils from './CalendarUtils';

describe('CalendarUtils', () => {
  describe('GetTodaysCalendar', () => {
    it('sets the first date to the current date subtracted by one year', () => {
      const todaysBasicCalendar = CalendarUtils.GetTodaysCalendar();
      const expectedDate = moment().subtract(1, 'years').format('YYYY-MM-DD');

      const actualDate = todaysBasicCalendar.children[0].children[0].children[0].attributes['data-date'];

      expect(actualDate).toEqual(expectedDate);
    });

    it('sets the last date to the current date', () => {
      const todaysBasicCalendar = CalendarUtils.GetTodaysCalendar();
      const expectedDate = moment().format('YYYY-MM-DD');

      const weeksWithoutMonthAndDayNames = todaysBasicCalendar.children[0].children
        .filter(el => !el.attributes.class);

      const actualDate = weeksWithoutMonthAndDayNames[weeksWithoutMonthAndDayNames.length - 1]
        .children[weeksWithoutMonthAndDayNames[weeksWithoutMonthAndDayNames.length - 1]
          .children.length - 1].attributes['data-date'];

      expect(actualDate).toEqual(expectedDate);
    });
  });
});
