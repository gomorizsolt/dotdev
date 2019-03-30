import React from 'react';
import { shallow } from 'enzyme';
import GitHubSvg from './GitHubSvg';
import GitHubHeader from './GitHubHeader/GitHubHeader';
import * as CalendarUtils from '../../../utils/CalendarUtils/CalendarUtils';
import * as Users from '../../../resources/Users/Users';
import * as TestUtils from '../../../utils/TestUtils/TestUtils';
import BasicCalendar from '../../../resources/BasicCalendar/BasicCalendar.json';
import * as JavaScriptUtils from '../../../utils/JavaScriptUtils/JavaScriptUtils';

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

// These should be mocked out because they're being used during the rendering.
jest.mock('svgson');
jest.mock('html-react-parser');

describe('<GitHubSvg />', () => {
  let gitHubSvgWrapper;

  beforeEach(() => {
    gitHubSvgWrapper = shallow(<GitHubSvg />);
  });

  it('renders GitHubHeader', () => {
    expect(gitHubSvgWrapper.find(GitHubHeader)).toHaveLength(1);
  });

  it('sets `BasicCalendar` to `actualCalendar` by default', () => {
    expect(gitHubSvgWrapper.state('actualCalendar')).toEqual(BasicCalendar);
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
    const parsedGitHubCalendar = TestUtils.getFakeContributionsObjectWithDailyCounts([3]);

    beforeEach(() => {
      CalendarUtils.getParsedGitHubCalendarSync.mockImplementationOnce(
        () => parsedGitHubCalendar[0],
      );
    });

    it('calls CalendarUtils.getParsedGitHubCalendarSync with the first GH user', async () => {
      const expectedUser = Users.GithubUsernames[0];

      await gitHubSvgWrapper.instance().fetchFirstUserCalendar();

      expect(CalendarUtils.getParsedGitHubCalendarSync).toHaveBeenCalledWith(expectedUser);
    });

    it('calls `writeState` with `isLoading` false and parsed calendar', async () => {
      const writeStateSpy = jest.spyOn(gitHubSvgWrapper.instance(), 'writeState');

      await gitHubSvgWrapper.instance().fetchFirstUserCalendar();

      const expectedObject = {
        newParsedCalendar: parsedGitHubCalendar[0],
        updatedActualCalendar: parsedGitHubCalendar[0],
        isLoading: false,
      };

      expect(writeStateSpy).toHaveBeenCalledWith(expectedObject);
    });
  });

  describe('writeState', () => {
    describe('when `isLoading` is defined', () => {
      const dataWithIsLoading = { isLoading: false };

      it('updates `isLoading` state field to the given value', () => {
        gitHubSvgWrapper.instance().writeState(dataWithIsLoading);

        expect(gitHubSvgWrapper.state('isLoading')).toEqual(dataWithIsLoading.isLoading);
      });
    });

    describe('when `isLoading` is not defined', () => {
      it('does not update `isLoading` state field', () => {
        const originalIsLoading = gitHubSvgWrapper.state('isLoading');
        JavaScriptUtils.isDefined.mockImplementationOnce(() => false);

        gitHubSvgWrapper.instance().writeState({});

        expect(gitHubSvgWrapper.state('isLoading')).toEqual(originalIsLoading);
      });
    });

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
