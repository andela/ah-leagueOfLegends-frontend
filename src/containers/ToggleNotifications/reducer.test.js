import toggleReducer from './reducer';

describe('toggle_reducer', () => {
  describe('INITIAL_STATE', () => {
    test('initial_state_is_correct', () => {
      const action = { type: 'undefined' };
      const initialState = { message: '', error: '' };

      expect(toggleReducer(undefined, action)).toEqual(initialState);
    });
  });

  describe('SUBSCRIBE_SUCCESS', () => {
    test('returns correct state', () => {
      const payload = { message: 'Subscribe successful' };
      const action = { type: 'SUBSCRIBE SUCCESSFUL', payload };
      const expectedState = { error: '', message: payload.message };

      expect(toggleReducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe('UNSUBSCRIBE_SUCCESS', () => {
    test('returns correct state', () => {
      const payload = { message: 'Subscribe successful' };
      const action = { type: 'UNSUBSCRIBE SUCCESSFUL', payload };
      const expectedState = { error: '', message: payload.message };

      expect(toggleReducer(undefined, action)).toEqual(expectedState);
    });
  });
});
