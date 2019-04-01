import React from 'react';
import { shallow } from 'enzyme';
import ContributionsValueDisplayer from './ContributionsValueDisplayer';
import { ContributionsDisplayerContainer } from './ContributionsValueDisplayer.style';
import LoaderIcon from '../../../resources/assets/SVG/LoaderIcon/LoaderIcon';

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
  });

  describe('when `isLoading` is false', () => {
    const sumOfContributions = 3514;

    beforeEach(() => {
      contributionsValueDisplayerWrapper.setProps({
        isLoading: false,
        sumOfContributions,
      });
    });

    it('renders the summarized contributions text', () => {
      const expectedText = `${sumOfContributions} contributions in the last year`;

      expect(contributionsValueDisplayerWrapper.find('p').text()).toEqual(expectedText);
    });
  });
});
