import React from 'react';
import { shallow } from 'enzyme';
import ContributionsValueDisplayer from './ContributionsValueDisplayer';
import * as ContributionsDataUtils from '../../../utils/ContributionsDataUtils/ContributionsDataUtils';
import { ContributionsDisplayerContainer } from './ContributionsValueDisplayer.style';
import LoaderIcon from '../../../resources/assets/SVG/LoaderIcon/LoaderIcon';

jest.mock('../../../utils/ContributionsDataUtils/ContributionsDataUtils', () => require
  .requireActual('../../../utils/TestUtils/TestUtils')
  .mockOriginalFunctionality('../ContributionsDataUtils/ContributionsDataUtils'));

describe('<ContributionsValueDisplayer />', () => {
  let contributionsValueDisplayerWrapper;

  beforeEach(() => {
    contributionsValueDisplayerWrapper = shallow(<ContributionsValueDisplayer isLoading />);
  });

  it('renders ContributionsDisplayerContainer', () => {
    expect(contributionsValueDisplayerWrapper
      .find(ContributionsDisplayerContainer)).toHaveLength(1);
  });

  describe('when `isLoading` is true', () => {
    beforeEach(() => {
      contributionsValueDisplayerWrapper.setProps({
        isLoading: true,
      });
    });

    it('renders LoaderIcon', () => {
      expect(contributionsValueDisplayerWrapper.find(LoaderIcon)).toHaveLength(1);
    });

    it('does not call ContributionsDataUtils.SumContributionsValues', () => {
      expect(ContributionsDataUtils.SumContributionsValues).not.toHaveBeenCalled();
    });
  });

  describe('when `isLoading` is false', () => {
    const sumOfContributions = 3514;

    beforeEach(() => {
      ContributionsDataUtils.SumContributionsValues
        .mockImplementationOnce(() => sumOfContributions);

      contributionsValueDisplayerWrapper.setProps({
        isLoading: false,
      });
    });

    it('calls ContributionsDataUtils.SumContributionsValues', () => {
      expect(ContributionsDataUtils.SumContributionsValues).toHaveBeenCalled();
    });

    it('renders the summarized contributions text', () => {
      const expectedText = `${sumOfContributions} contributions in the last year`;

      expect(contributionsValueDisplayerWrapper.find('p').text()).toEqual(expectedText);
    });
  });
});
