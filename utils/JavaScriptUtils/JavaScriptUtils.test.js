import * as JavaScriptUtils from './JavaScriptUtils';

describe('JavaScriptUtils', () => {
  describe('isDefined', () => {
    describe('when the given value is undefined', () => {
      const value = undefined;

      it('returns false', () => {
        const returnedValue = JavaScriptUtils.isDefined(value);

        expect(returnedValue).toBeFalsy();
      });
    });

    describe('when the given value is defined', () => {
      const value = 0;

      it('returns true', () => {
        const returnedValue = JavaScriptUtils.isDefined(value);

        expect(returnedValue).toBeTruthy();
      });
    });
  });
});
