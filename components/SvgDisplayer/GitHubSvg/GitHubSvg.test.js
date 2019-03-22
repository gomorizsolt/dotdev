import React from 'react';
import { mount } from 'enzyme';
import { stringify } from 'svgson';
import GitHubSvg from './GitHubSvg';
import { ContributionsFooter, ColorsList } from './GitHubSvg.style';
import * as ColorSchemas from '../../../resources/ColorSchemas/ColorSchemas';
import * as CalendarUtils from '../../../utils/CalendarUtils/CalendarUtils';

jest.mock('../../../utils/CalendarUtils/CalendarUtils', () => require
  .requireActual('../../../utils/TestUtils/TestUtils')
  .mockOriginalFunctionality(
    '../CalendarUtils/CalendarUtils',
  ));

describe('<GitHubSvg />', () => {
  let gitHubSvgDisplayerWrapper;

  // Reason for using `mount` instead of `shallow`:
  // https://stackoverflow.com/a/48088725/9599137
  beforeEach(() => {
    gitHubSvgDisplayerWrapper = mount(<GitHubSvg />);
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

  it('renders ContributionsFooter', () => {
    expect(gitHubSvgDisplayerWrapper.find(ContributionsFooter)).toHaveLength(1);
  });

  it('renders ColorsList', () => {
    expect(gitHubSvgDisplayerWrapper.find(ColorsList)).toHaveLength(1);
  });

  it('renders GitHubColorSchema colors', () => {
    expect(gitHubSvgDisplayerWrapper.find('li')).toHaveLength(ColorSchemas.GitHubColorSchema.length);
  });
});
