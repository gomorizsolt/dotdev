import * as CalendarUtils from './Common';

describe('CalendarUtils', () => {
  describe('getFillColor', () => {
    describe('when the total of the daily contributions is 0', () => {
      const totalDailyContributions = 0;

      it('sets the default color', () => {
        const expectedFillColor = '#ebedf0';

        const actualFillColor = CalendarUtils.getFillColor(totalDailyContributions);

        expect(actualFillColor).toEqual(expectedFillColor);
      });
    });

    describe('when the total of the daily contributions is higher than 0 and less than 10', () => {
      const totalDailyContributions = 9;

      it('sets the `#c6e48b` color', () => {
        const expectedFillColor = '#c6e48b';

        const actualFillColor = CalendarUtils.getFillColor(totalDailyContributions);

        expect(actualFillColor).toEqual(expectedFillColor);
      });
    });

    describe('when the total of the daily contributions is higher than or equal to 10 and less than 20', () => {
      const totalDailyContributions = 19;

      it('sets the `#7bc96f` color', () => {
        const expectedFillColor = '#7bc96f';

        const actualFillColor = CalendarUtils.getFillColor(totalDailyContributions);

        expect(actualFillColor).toEqual(expectedFillColor);
      });
    });

    describe('when the total of the daily contributions is higher than or equal to 20 and less than 30', () => {
      const totalDailyContributions = 29;

      it('sets the `#239a3b` color', () => {
        const expectedFillColor = '#239a3b';

        const actualFillColor = CalendarUtils.getFillColor(totalDailyContributions);

        expect(actualFillColor).toEqual(expectedFillColor);
      });
    });

    describe('when the total of the daily contributions is higher than or equal to 30', () => {
      const totalDailyContributions = 30;

      it('sets the `#196127` color', () => {
        const expectedFillColor = '#196127';

        const actualFillColor = CalendarUtils.getFillColor(totalDailyContributions);

        expect(actualFillColor).toEqual(expectedFillColor);
      });
    });
  });
});
