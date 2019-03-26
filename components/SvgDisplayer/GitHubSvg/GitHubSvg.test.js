import React from 'react';
import { shallow } from 'enzyme';
import { stringify } from 'svgson';
import GitHubSvg from './GitHubSvg';
import GitHubHeader from './GitHubHeader/GitHubHeader';
import * as CalendarUtils from '../../../utils/CalendarUtils/CalendarUtils';
import * as ContributionsDataUtils from '../../../utils/ContributionsDataUtils/ContributionsDataUtils';
import * as Users from '../../../resources/Users/Users';
import * as TestUtils from '../../../utils/TestUtils/TestUtils';

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

  beforeEach(() => {
    gitHubSvgDisplayerWrapper = shallow(<GitHubSvg />);
  });

  it('calls CalendarUtils.GetTodaysCalendar', () => {
    expect(CalendarUtils.GetTodaysCalendar).toHaveBeenCalled();
  });

  it('sets the stringified calendar to `container`', () => {
    const expectedSvgText = stringify(CalendarUtils.GetTodaysCalendar());

    const actualSvgText = gitHubSvgDisplayerWrapper.instance().container;

    expect(actualSvgText).toBe(expectedSvgText);
  });

  it('calls ContributionsDataUtils.GetParsedData with `GithubUsernames`', () => {
    expect(ContributionsDataUtils.GetParsedData).toHaveBeenCalledWith(Users.GithubUsernames);
  });

  it('sets the parsed data into the state', async () => {
    const parsedData = TestUtils.getFakeContributionsObjectWithDailyCounts([5, 3, 8]);

    ContributionsDataUtils.GetParsedData.mockImplementationOnce(() => parsedData);

    gitHubSvgDisplayerWrapper = await shallow(<GitHubSvg />);

    expect(gitHubSvgDisplayerWrapper.state('contributionsData')).toEqual(parsedData);
  });

  it('sets `isLoading` to false', () => {
    expect(gitHubSvgDisplayerWrapper.state('isLoading')).toBeTruthy();
  });

  it('renders GitHubHeader', () => {
    expect(gitHubSvgDisplayerWrapper.find(GitHubHeader)).toHaveLength(1);
  });
});
