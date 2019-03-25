import React from 'react';
import { mount } from 'enzyme';
import { stringify } from 'svgson';
import GitHubSvg from './GitHubSvg';
import GitHubHeader from './GitHubHeader/GitHubHeader';
import * as CalendarUtils from '../../../utils/CalendarUtils/CalendarUtils';
import * as ContributionsDataUtils from '../../../utils/ContributionsDataUtils/ContributionsDataUtils';
import * as Users from '../../../resources/Users/Users';
import * as TestUtils from '../../../utils/TestUtils/TestUtils';
import BasicCalendar from '../../../resources/BasicCalendar/BasicCalendar.json';

jest.mock('../../../utils/CalendarUtils/CalendarUtils', () => require
  .requireActual('../../../utils/TestUtils/TestUtils')
  .mockOriginalFunctionality(
    '../CalendarUtils/CalendarUtils',
  ));

jest.mock('../../../utils/ContributionsDataUtils/ContributionsDataUtils', () => require
  .requireActual('../../../utils/TestUtils/TestUtils')
  .mockOriginalFunctionality('../ContributionsDataUtils/ContributionsDataUtils'));

describe('<GitHubSvg />', () => {
  let gitHubSvgDisplayerWrapper;

  // Reason for using `mount` instead of `shallow`:
  // https://stackoverflow.com/a/48088725/9599137
  beforeEach(() => {
    gitHubSvgDisplayerWrapper = mount(<GitHubSvg />);
  });

  it('sets the stringified `BasicCalendar` to the container`s innerHTML', () => {
    // Reason for `selfClose`: innerHTML doesn't apply self closing tags automatically
    // while stringify does it, thereby the texts would be different.
    const expectedSvgText = stringify(BasicCalendar, { selfClose: false });

    const actualSvgText = gitHubSvgDisplayerWrapper.instance().container.innerHTML;

    expect(actualSvgText).toBe(expectedSvgText);
  });

  it('calls ContributionsDataUtils.GetParsedData with `GithubUsernames`', () => {
    expect(ContributionsDataUtils.GetParsedData).toHaveBeenCalledWith(Users.GithubUsernames);
  });

  it('sets the parsed data into the state', async () => {
    const parsedData = TestUtils.getFakeContributionsObjectWithDailyCounts([5, 3, 8]);

    ContributionsDataUtils.GetParsedData.mockImplementationOnce(() => parsedData);
    // Something is wrong with `mockOriginalFunctionality` when it mocks an array.
    // It creates another array around the original array. [ [ { children: ...} ] ].
    ContributionsDataUtils.SumContributionsValues.mockImplementationOnce(() => jest.fn());

    gitHubSvgDisplayerWrapper = await mount(<GitHubSvg />);

    expect(gitHubSvgDisplayerWrapper.state('contributionsData')).toEqual(parsedData);
  });

  it('sets `isLoading` to false', () => {
    expect(gitHubSvgDisplayerWrapper.state('isLoading')).toBeTruthy();
  });

  it('calls CalendarUtils.AdjustFetchedCalendarStyle with the first SVG', async () => {
    const parsedData = TestUtils.getFakeContributionsObjectWithDailyCounts([2, 4, 1]);

    ContributionsDataUtils.GetParsedData.mockImplementationOnce(() => parsedData);
    // Something is wrong with `mockOriginalFunctionality` when it mocks an array.
    // It creates another array around the original array. [ [ { children: ...} ] ].
    ContributionsDataUtils.SumContributionsValues.mockImplementationOnce(() => jest.fn());

    gitHubSvgDisplayerWrapper = await mount(<GitHubSvg />);

    expect(CalendarUtils.AdjustFetchedCalendarStyle).toHaveBeenCalledWith(parsedData[0]);
  });

  it('renders GitHubHeader', () => {
    expect(gitHubSvgDisplayerWrapper.find(GitHubHeader)).toHaveLength(1);
  });
});
