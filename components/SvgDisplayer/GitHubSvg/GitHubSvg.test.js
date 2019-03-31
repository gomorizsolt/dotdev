import React from 'react';
import { shallow } from 'enzyme';
import GitHubSvg from './GitHubSvg';
import GitHubHeader from './GitHubHeader/GitHubHeader';
import ErrorDisplayer from '../../UI/ErrorDisplayer/ErrorDisplayer';
import * as CalendarUtils from '../../../utils/CalendarUtils/CalendarUtils';
import * as Users from '../../../resources/Users/Users';
import * as TestUtils from '../../../utils/TestUtils/TestUtils';
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

jest.mock('../../../utils/JavaScriptUtils/JavaScriptUtils', () => require
  .requireActual('../../../utils/TestUtils/TestUtils')
  .mockOriginalFunctionality(
    '../JavaScriptUtils/JavaScriptUtils',
  ));

jest.mock('svgson');
jest.mock('html-react-parser');

describe('<GitHubSvg />', () => {
  let gitHubSvgWrapper;

  beforeEach(() => {
    gitHubSvgWrapper = shallow(<GitHubSvg />);
  });

  it('sets `BasicCalendar` to `actualCalendar` by default', () => {
    expect(gitHubSvgWrapper.state('actualCalendar')).toEqual(BasicCalendar);
  });

  it('renders GitHubHeader', () => {
    expect(gitHubSvgWrapper.find(GitHubHeader)).toHaveLength(1);
  });

  it('renders ErrorDisplayer', () => {
    expect(gitHubSvgWrapper.find(ErrorDisplayer)).toHaveLength(1);
  });

  describe('setActualCalendar', () => {
    const calendarGraph = TestUtils.getFakeContributionsObjectWithDailyCounts([5]);
    const calendarGraphPromise = Promise.resolve(calendarGraph[0]);

    it('calls CalendarUtils.MergeSvgs with `actualCalendar` and resolved calendar', async () => {
      const actualCalendar = gitHubSvgWrapper.state('actualCalendar');

      await gitHubSvgWrapper.instance().setActualCalendar(calendarGraphPromise);

      expect(CalendarUtils.MergeSvgs).toHaveBeenCalledWith(actualCalendar, calendarGraph[0]);
    });

    it('calls `writeState` with the updated actual calendar and resolved calendar', async () => {
      const writeStateSpy = jest.spyOn(gitHubSvgWrapper.instance(), 'writeState');
      CalendarUtils.MergeSvgs.mockImplementationOnce(() => calendarGraph[0]);

      await gitHubSvgWrapper.instance().setActualCalendar(calendarGraphPromise);

      const expectedObject = {
        newParsedCalendar: calendarGraph[0],
        updatedActualCalendar: calendarGraph[0],
      };

      expect(writeStateSpy).toHaveBeenCalledWith(expectedObject);
    });
  });

  describe('fetchFirstUserCalendar', () => {
    it('calls CalendarUtils.getParsedGitHubCalendarSync with the first GH user', async () => {
      CalendarUtils.getParsedGitHubCalendarSync.mockImplementationOnce(() => jest.fn());
      const expectedUser = Users.GithubUsernames[0];

      await gitHubSvgWrapper.instance().fetchFirstUserCalendar();

      expect(CalendarUtils.getParsedGitHubCalendarSync).toHaveBeenCalledWith(expectedUser);
    });

    it('sets `isLoading` to false', async () => {
      CalendarUtils.getParsedGitHubCalendarSync.mockImplementationOnce(() => jest.fn());

      await gitHubSvgWrapper.instance().fetchFirstUserCalendar();

      expect(gitHubSvgWrapper.state('isLoading')).toBeFalsy();
    });

    describe('when the first user`s calendar meets the requirement', async () => {
      const parsedGitHubCalendar = TestUtils.getFakeContributionsObjectWithDailyCounts([3])[0];
      let fetchRemainingCalendarsSpy;

      beforeEach(() => {
        CalendarUtils.getParsedGitHubCalendarSync.mockImplementationOnce(
          () => parsedGitHubCalendar,
        );

        fetchRemainingCalendarsSpy = jest.spyOn(gitHubSvgWrapper.instance(), 'fetchRemainingCalendars');
      });

      it('calls writeState with the parsed calendar', async () => {
        const writeStateSpy = jest.spyOn(gitHubSvgWrapper.instance(), 'writeState');

        await gitHubSvgWrapper.instance().fetchFirstUserCalendar();

        const expectedObject = {
          newParsedCalendar: parsedGitHubCalendar,
          updatedActualCalendar: parsedGitHubCalendar,
        };

        expect(writeStateSpy).toHaveBeenCalledWith(expectedObject);
      });

      it('calls `fetchRemainingCalendars`', async () => {
        await gitHubSvgWrapper.instance().fetchFirstUserCalendar();

        expect(fetchRemainingCalendarsSpy).toHaveBeenCalled();
      });
    });

    describe('when the first user`s calendar does not meet the requirement', () => {
      beforeEach(() => {
        CalendarUtils.getParsedGitHubCalendarSync.mockImplementationOnce(
          () => null,
        );
      });

      it('sets `error` to the returned value of `CalendarUtils.getIncorrectFirstUserCalendarErrorMessage`', async () => {
        const expectedError = CalendarUtils.getIncorrectFirstUserCalendarErrorMessage();

        await gitHubSvgWrapper.instance().fetchFirstUserCalendar();

        expect(gitHubSvgWrapper.state('error')).toEqual(expectedError);
      });
    });
  });

  describe('writeState', () => {
    it('extends `usersParsedCalendarGraphs` with the fetched calendar', () => {
      const calendarGraph = TestUtils.getFakeContributionsObjectWithDailyCounts([3]);
      const data = { newParsedCalendar: calendarGraph[0] };

      gitHubSvgWrapper.instance().writeState(data);

      const expectedUsersParsedCalendarGraphs = [data.newParsedCalendar];

      expect(gitHubSvgWrapper.state('usersParsedCalendarGraphs')).toEqual(expectedUsersParsedCalendarGraphs);
    });

    it('updates `actualCalendar`', () => {
      const calendarGraph = TestUtils.getFakeContributionsObjectWithDailyCounts([3]);
      const data = { updatedActualCalendar: calendarGraph[0] };

      gitHubSvgWrapper.instance().writeState(data);

      expect(gitHubSvgWrapper.state('actualCalendar')).toEqual(data.updatedActualCalendar);
    });
  });
});
