import React from 'react';
import { shallow } from 'enzyme';
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

  beforeEach(() => {
    gitHubSvgDisplayerWrapper = shallow(<GitHubSvg />);
  });

  it('renders GitHubHeader', () => {
    expect(gitHubSvgDisplayerWrapper.find(GitHubHeader)).toHaveLength(1);
  });

  /* it('renders the stringified BasicCalendar', () => {

  }); */
});
