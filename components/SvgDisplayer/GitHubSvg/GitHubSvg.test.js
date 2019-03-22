import React from 'react';
import { mount } from 'enzyme';
import { stringify } from 'svgson';
import GitHubSvg from './GitHubSvg';
import GitHubFooter from './GitHubFooter/GitHubFooter';
import ContributionsValueDisplayer from '../../UI/ContributionsValueDisplayer/ContributionsValueDisplayer';
import * as CalendarUtils from '../../../utils/CalendarUtils/CalendarUtils';
import * as ContributionsDataUtils from '../../../utils/ContributionsDataUtils/ContributionsDataUtils';
import * as Users from '../../../resources/Users/Users';

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
  beforeEach(async () => {
    gitHubSvgDisplayerWrapper = await mount(<GitHubSvg />);
  });

  it('calls CalendarUtils.GetTodaysCalendar', () => {
    expect(CalendarUtils.GetTodaysCalendar).toHaveBeenCalled();
  });

  it('sets the stringified SVG to the container`s innerHTML', () => {
    // Reason for `selfClose`: innerHTML doesn't apply self closing tags automatically
    // while stringify does it, thereby the texts would be different.
    const expectedSvgText = stringify(CalendarUtils.GetTodaysCalendar(), { selfClose: false });

    const actualSvgText = gitHubSvgDisplayerWrapper.instance().container.innerHTML;

    expect(actualSvgText).toBe(expectedSvgText);
  });

  it('calls ContributionsDataUtils.GetParsedData with `GithubUsernames`', () => {
    expect(ContributionsDataUtils.GetParsedData).toHaveBeenCalledWith(Users.GithubUsernames);
  });

  it('sets `isLoading` to false', () => {
    expect(gitHubSvgDisplayerWrapper.state('isLoading')).toBeTruthy();
  });

  it('renders ContributionsValueDisplayer', () => {
    expect(gitHubSvgDisplayerWrapper.find(ContributionsValueDisplayer)).toHaveLength(1);
  });

  it('renders GitHubFooter', () => {
    expect(gitHubSvgDisplayerWrapper.find(GitHubFooter)).toHaveLength(1);
  });
});
