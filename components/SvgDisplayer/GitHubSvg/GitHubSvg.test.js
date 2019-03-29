import React from 'react';
import { shallow } from 'enzyme';
import GitHubSvg from './GitHubSvg';
import GitHubHeader from './GitHubHeader/GitHubHeader';
import * as CalendarUtils from '../../../utils/CalendarUtils/CalendarUtils';
import * as Users from '../../../resources/Users/Users';
import * as TestUtils from '../../../utils/TestUtils/TestUtils';
import * as SvgUtils from '../../../utils/SvgUtils/SvgUtils';
import BasicCalendar from '../../../resources/BasicCalendar/BasicCalendar.json';

jest.mock('../../../utils/CalendarUtils/CalendarUtils', () => require
  .requireActual('../../../utils/TestUtils/TestUtils')
  .mockOriginalFunctionality(
    '../CalendarUtils/CalendarUtils',
  ));

jest.mock('../../../utils/SvgUtils/SvgUtils', () => require
  .requireActual('../../../utils/TestUtils/TestUtils')
  .mockOriginalFunctionality(
    '../SvgUtils/SvgUtils',
  ));

describe('<GitHubSvg />', () => {
  let gitHubSvgDisplayerWrapper;

  beforeEach(() => {
    gitHubSvgDisplayerWrapper = shallow(<GitHubSvg />);
  });

  it('renders GitHubHeader', () => {
    expect(gitHubSvgDisplayerWrapper.find(GitHubHeader)).toHaveLength(1);
  });

  it('sets `BasicCalendar` to `actualCalendar` by default', () => {
    expect(gitHubSvgDisplayerWrapper.state('actualCalendar')).toEqual(BasicCalendar);
  });

  it('calls SvgUtils.GetGitHubUserSVG', () => {
    // Reason for `mockClear`: the function would be called 9 times instead of 3
    // becase of the previous rendering by the other test cases.
    SvgUtils.GetGitHubUserSVG.mockClear();

    gitHubSvgDisplayerWrapper = shallow(<GitHubSvg />);

    expect(SvgUtils.GetGitHubUserSVG).toHaveBeenCalledTimes(Users.GithubUsernames.length);
  });

  describe('setActualCalendar', () => {
    const calendarData = TestUtils.getFakeContributionsObjectWithDailyCounts([5]);
    const resolvedCalendarData = Promise.resolve(calendarData);

    it('increases the length of `usersParsedCalendarGraphs` by 1', async () => {
      const expectedLength = gitHubSvgDisplayerWrapper.state('usersParsedCalendarGraphs').length + 1;

      await gitHubSvgDisplayerWrapper.instance().setActualCalendar(resolvedCalendarData);

      const actualLength = gitHubSvgDisplayerWrapper.state('usersParsedCalendarGraphs').length;

      expect(actualLength).toEqual(expectedLength);
    });

    describe('when `usersParsedCalendarGraphs` contains a single element', () => {
      it('sets `actualCalendar` to the parsed calendar', async () => {
        await gitHubSvgDisplayerWrapper.instance().setActualCalendar(resolvedCalendarData);

        expect(gitHubSvgDisplayerWrapper.state('actualCalendar')).toEqual(calendarData);
      });
    });

    describe('when `usersParsedCalendarGraphs` contains more than one element', () => {
      beforeEach(() => {
        gitHubSvgDisplayerWrapper.setState({
          usersParsedCalendarGraphs: [
            { ...calendarData },
            { ...calendarData },
          ],
        });
      });

      it('calls CalendarUtils.MergeSvgs with `actualCalendar` and the parsed calendar', async () => {
        const actualCalendar = gitHubSvgDisplayerWrapper.state('actualCalendar');
        await gitHubSvgDisplayerWrapper.instance().setActualCalendar(resolvedCalendarData);

        expect(CalendarUtils.MergeSvgs).toHaveBeenCalledWith(actualCalendar, calendarData);
      });
    });
  });
});
