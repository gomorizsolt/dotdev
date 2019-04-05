import * as GitHub from './GitHub';
import * as TestUtils from '../../TestUtils/TestUtils';

describe('GitHub', () => {
  describe('getTotalContributions', () => {
    it('returns the total contributions of the current user', () => {
      const currentUserJsonCalendar = TestUtils.getFakeContributionsObjectWithDailyCounts([12])[0];
      const expectedTotalContributions = 12;

      const actualTotalContributions = GitHub.getTotalContributions(currentUserJsonCalendar);

      expect(actualTotalContributions).toEqual(expectedTotalContributions);
    });
  });

  describe('mergeCalendars', () => {
    it('sets the `data-count` property based on the given calendars', () => {
      const calendars = TestUtils.getFakeContributionsObjectWithDailyCounts([5, 9]);
      const actualCalendar = calendars[0];
      const currentUserJsonCalendar = calendars[1];

      // Created the two fake calendars with 5 and 9 contributions,
      // that's why we expect '14' in this case.
      const expectedDataCountValue = '14';

      const mergedCalendar = GitHub.mergeCalendars(actualCalendar, currentUserJsonCalendar);
      const actualDataCountValue = mergedCalendar.children[0].children[0].children[0].attributes['data-count'];

      expect(actualDataCountValue).toEqual(expectedDataCountValue);
    });
  });
});
