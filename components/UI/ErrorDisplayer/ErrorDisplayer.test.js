import React from 'react';
import { shallow } from 'enzyme';
import ErrorDisplayer from './ErrorDisplayer';
import { ErrorMessageContainer } from './ErrorDisplayer.style';

describe('<ErrorDisplayer />', () => {
  let errorDispalyerWrapper;

  describe('when `errorMessage` is defined', () => {
    const errorMessage = 'Fetch failed';

    beforeEach(() => {
      errorDispalyerWrapper = shallow(<ErrorDisplayer errorMessage={errorMessage} />);
    });

    it('renders ErrorMessageContainer', () => {
      expect(errorDispalyerWrapper.find(ErrorMessageContainer)).toHaveLength(1);
    });

    it('renders the given text', () => {
      expect(errorDispalyerWrapper.find(ErrorMessageContainer).text()).toEqual(errorMessage);
    });
  });

  describe('when `errorMessage` is not defined', () => {
    beforeEach(() => {
      errorDispalyerWrapper = shallow(<ErrorDisplayer errorMessage={null} />);
    });

    it('does not render anything', () => {
      // https://stackoverflow.com/a/52516151/9599137
      expect(errorDispalyerWrapper.html()).toBeNull();
    });
  });
});
