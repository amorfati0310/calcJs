const { addNumber } = require('./calcService');

describe('addNumber', () => {
  describe('when current is 0', () => {
    const initialState = {
      current: 0,
    };

    it('sets given number', () => {
      const state = addNumber(initialState, 2);
      expect(state.current).toBe(2);
    });
  });

  describe('when current is not 0', () => {
    const initialState = {
      current: 1,
    };

    it('append given number', () => {
      const state = addNumber(initialState, 2);
      expect(state.current).toBe(12);
    });
  });
});
