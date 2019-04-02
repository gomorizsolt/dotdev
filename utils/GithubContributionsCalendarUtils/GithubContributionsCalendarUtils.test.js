import * as GithubContributionsCalendarUtils from './GithubContributionsCalendarUtils';
import * as TestUtils from '../TestUtils/TestUtils';

const GetObjectValueByAttribute = (object, attribute) => (
  object.children[0].children[0].children[0].attributes[attribute]
);

describe('GithubContributionsCalendarUtils', () => {
  describe('mergeSvgs', () => {
    describe('when the contributions value is 0', () => {
      const calendars = TestUtils.getFakeContributionsObjectWithDailyCounts([0, 0]);

      it('sets the default color', () => {
        const expectedFillColor = '#ebedf0';

        const mergedSvg = GithubContributionsCalendarUtils.mergeSvgs(calendars[0], calendars[1]);
        const actualFillColor = GetObjectValueByAttribute(mergedSvg, 'fill');

        expect(actualFillColor).toEqual(expectedFillColor);
      });
    });

    describe('when the contributions value is higher than 0 and less than 10', () => {
      const calendars = TestUtils.getFakeContributionsObjectWithDailyCounts([5, 4]);

      it('sets the `#c6e48b` color', () => {
        const expectedFillColor = '#c6e48b';

        const mergedSvg = GithubContributionsCalendarUtils.mergeSvgs(calendars[0], calendars[1]);
        const actualFillColor = GetObjectValueByAttribute(mergedSvg, 'fill');

        expect(actualFillColor).toEqual(expectedFillColor);
      });
    });

    describe('when the contributions value is higher than or equal to 10 and less than 20', () => {
      const calendars = TestUtils.getFakeContributionsObjectWithDailyCounts([11, 8]);

      it('sets the `#7bc96f` color', () => {
        const expectedFillColor = '#7bc96f';

        const mergedSvg = GithubContributionsCalendarUtils.mergeSvgs(calendars[0], calendars[1]);
        const actualFillColor = GetObjectValueByAttribute(mergedSvg, 'fill');

        expect(actualFillColor).toEqual(expectedFillColor);
      });
    });

    describe('when the contributions value is higher than or equal to 20 and less than 30', () => {
      const calendars = TestUtils.getFakeContributionsObjectWithDailyCounts([21, 8]);

      it('sets the `#239a3b` color', () => {
        const expectedFillColor = '#239a3b';

        const mergedSvg = GithubContributionsCalendarUtils.mergeSvgs(calendars[0], calendars[1]);
        const actualFillColor = GetObjectValueByAttribute(mergedSvg, 'fill');

        expect(actualFillColor).toEqual(expectedFillColor);
      });
    });

    describe('when the contributions value is higher than or equal to 30', () => {
      const calendars = TestUtils.getFakeContributionsObjectWithDailyCounts([22, 8]);

      it('sets the `#196127` color', () => {
        const expectedFillColor = '#196127';

        const mergedSvg = GithubContributionsCalendarUtils.mergeSvgs(calendars[0], calendars[1]);
        const actualFillColor = GetObjectValueByAttribute(mergedSvg, 'fill');

        expect(actualFillColor).toEqual(expectedFillColor);
      });
    });

    it('sets the stringified `data-count` property', () => {
      const calendars = TestUtils.getFakeContributionsObjectWithDailyCounts([22, 8]);
      const expectedContributionsValue = '30';

      const mergedSvg = GithubContributionsCalendarUtils.mergeSvgs(calendars[0], calendars[1]);
      const actualContributionsValue = GetObjectValueByAttribute(mergedSvg, 'data-count');

      expect(actualContributionsValue).toEqual(expectedContributionsValue);
    });
  });
});
