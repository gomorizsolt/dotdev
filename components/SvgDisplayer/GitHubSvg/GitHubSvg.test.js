import React from 'react';
import { shallow } from 'enzyme';
import GitHubSvg from './GitHubSvg';
import GitHubHeader from './GitHubHeader/GitHubHeader';
import * as GithubContributionsCalendarUtils from '../../../utils/GithubContributionsCalendarUtils/GithubContributionsCalendarUtils';
import * as Users from '../../../resources/Users/Users';
import * as TestUtils from '../../../utils/TestUtils/TestUtils';
import BasicCalendar from '../../../resources/BasicCalendar/BasicCalendar.json';

jest.mock('../../../utils/GithubContributionsCalendarUtils/GithubContributionsCalendarUtils', () => require
  .requireActual('../../../utils/TestUtils/TestUtils')
  .mockOriginalFunctionality(
    '../GithubContributionsCalendarUtils/GithubContributionsCalendarUtils',
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

  describe('setActualCalendar', () => {
    const gitHubCalendar = TestUtils.getFakeContributionsObjectWithDailyCounts([5]);
    const gitHubCalendarPromise = Promise.resolve(gitHubCalendar[0]);

    it('merges the actual and resolved calendar', async () => {
      const actualCalendar = gitHubSvgWrapper.state('actualCalendar');

      await gitHubSvgWrapper.instance().setActualCalendar(gitHubCalendarPromise);

      expect(GithubContributionsCalendarUtils.MergeSvgs)
        .toHaveBeenCalledWith(actualCalendar, gitHubCalendar[0]);
    });

    it('calls `writeState` with the sum of the contributions of the current user and the updated actual calendar', async () => {
      const sumOfCurrentUserContributions = 512;
      GithubContributionsCalendarUtils.SumGitHubCalendarContributions.mockImplementationOnce(
        () => sumOfCurrentUserContributions,
      );
      GithubContributionsCalendarUtils.MergeSvgs.mockImplementationOnce(() => gitHubCalendar[0]);

      const writeStateSpy = jest.spyOn(gitHubSvgWrapper.instance(), 'writeState');

      await gitHubSvgWrapper.instance().setActualCalendar(gitHubCalendarPromise);

      const expectedWriteStateObject = {
        sumOfCurrentUserContributions,
        updatedActualCalendar: gitHubCalendar[0],
      };

      expect(writeStateSpy).toHaveBeenCalledWith(expectedWriteStateObject);
    });
  });

  describe('fetchFirstUserCalendar', () => {
    it('fetches synchronously the first GH user`s calendar', async () => {
      GithubContributionsCalendarUtils.getParsedGitHubCalendarSync.mockImplementationOnce(
        () => jest.fn(),
      );
      const expectedUser = Users.GithubUsernames[0];

      await gitHubSvgWrapper.instance().fetchFirstUserCalendar();

      expect(GithubContributionsCalendarUtils.getParsedGitHubCalendarSync)
        .toHaveBeenCalledWith(expectedUser);
    });

    it('sets `isLoading` to false', async () => {
      GithubContributionsCalendarUtils.getParsedGitHubCalendarSync.mockImplementationOnce(
        () => jest.fn(),
      );

      await gitHubSvgWrapper.instance().fetchFirstUserCalendar();

      expect(gitHubSvgWrapper.state('isLoading')).toBeFalsy();
    });

    describe('when the first user`s calendar meets the requirement', async () => {
      const parsedGitHubCalendar = TestUtils.getFakeContributionsObjectWithDailyCounts([3])[0];
      const sumOfCurrentUserContributions = 1024;

      beforeEach(() => {
        GithubContributionsCalendarUtils.getParsedGitHubCalendarSync.mockImplementationOnce(
          () => parsedGitHubCalendar,
        );

        GithubContributionsCalendarUtils.SumGitHubCalendarContributions.mockImplementationOnce(
          () => sumOfCurrentUserContributions,
        );
      });

      it('calls `writeState` with the sum of the contributions of the current user and parsed calendar', async () => {
        const writeStateSpy = jest.spyOn(gitHubSvgWrapper.instance(), 'writeState');

        await gitHubSvgWrapper.instance().fetchFirstUserCalendar();

        const expectedWriteStateObject = {
          sumOfCurrentUserContributions,
          updatedActualCalendar: parsedGitHubCalendar,
        };

        expect(writeStateSpy).toHaveBeenCalledWith(expectedWriteStateObject);
      });

      it('fetches the remaining calendars', async () => {
        const fetchRemainingCalendarsSpy = jest.spyOn(gitHubSvgWrapper.instance(), 'fetchRemainingCalendars');

        await gitHubSvgWrapper.instance().fetchFirstUserCalendar();

        expect(fetchRemainingCalendarsSpy).toHaveBeenCalled();
      });
    });

    describe('when the first user`s calendar does not meet the requirement', () => {
      let spyConsoleError;

      beforeEach(() => {
        GithubContributionsCalendarUtils.getParsedGitHubCalendarSync.mockImplementationOnce(
          () => {
            throw new Error(
              GithubContributionsCalendarUtils.getIncorrectFirstUserCalendarErrorMessage(),
            );
          },
        );

        spyConsoleError = jest.spyOn(console, 'error');
      });

      it('logs the returned value of `GithubContributionsCalendarUtils.getIncorrectFirstUserCalendarErrorMessage` as an error', async () => {
        const expectedErrorMessage = GithubContributionsCalendarUtils
          .getIncorrectFirstUserCalendarErrorMessage();

        await gitHubSvgWrapper.instance().fetchFirstUserCalendar();

        expect(spyConsoleError).toHaveBeenCalledWith(expectedErrorMessage);
      });
    });
  });

  describe('writeState', () => {
    it('adds the received contributions value to `sumOfContributions`', () => {
      const data = { sumOfCurrentUserContributions: 50 };
      const expectedSumOfContributions = gitHubSvgWrapper.state('sumOfContributions') + data.sumOfCurrentUserContributions;

      gitHubSvgWrapper.instance().writeState(data);

      expect(gitHubSvgWrapper.state('sumOfContributions')).toEqual(expectedSumOfContributions);
    });

    it('updates the actual calendar', () => {
      const calendarGraph = TestUtils.getFakeContributionsObjectWithDailyCounts([3]);
      const data = { updatedActualCalendar: calendarGraph[0] };

      gitHubSvgWrapper.instance().writeState(data);

      expect(gitHubSvgWrapper.state('actualCalendar')).toEqual(data.updatedActualCalendar);
    });
  });
});
