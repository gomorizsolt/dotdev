import React from 'react';
import { shallow } from 'enzyme';
import ContributionsValueDisplayer from './ContributionsValueDisplayer';
import * as ContributionsDataUtils from '../../../utils/ContributionsDataUtils/ContributionsDataUtils';

jest.mock('../../../utils/ContributionsDataUtils/ContributionsDataUtils', () => require
  .requireActual('../../../utils/TestUtils/TestUtils')
  .mockOriginalFunctionality('../ContributionsDataUtils/ContributionsDataUtils'));

describe('<ContributionsValueDisplayer />', () => {
  let contributionsValueDisplayerWrapper;

  describe('when `isLoading` is true', () => {
    beforeEach(() => {
      contributionsValueDisplayerWrapper = shallow(
        <ContributionsValueDisplayer isLoading />,
      );
    });

    it('renders the loading text', () => {
      expect(contributionsValueDisplayerWrapper.find('p').text()).toEqual('Loading ...');
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

      contributionsValueDisplayerWrapper = shallow(
        <ContributionsValueDisplayer isLoading={false} />,
      );
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
