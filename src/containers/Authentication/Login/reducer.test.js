import loginReducer from './reducer';

describe('login_reducer', () => {
  describe('INITIAL_STATE', () => {
    test('initial_state_is_correct', () => {
      const action = { type: 'WRONG ACTION' };
      const initialState = { isAuthenticated: false };

      expect(loginReducer(undefined, action)).toEqual(initialState);
    });
  });

  describe('USERS_LOGIN_SUCCESS', () => {
    test('returns correct state', () => {
      const user = { user: { email: 'test_user@gmail.com', username: 'password' } };
      const action = { type: 'USERS_LOGIN_SUCCESS', payload: user };
      const expectedState = { isAuthenticated: true, user };

      expect(loginReducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe('USERS_LOGIN_FAILURE', () => {
    test('returns correct state', () => {
      const error = 'The requested user cannot be found';
      const action = { type: 'USERS_LOGIN_FAILURE', error };
      const expectedState = { isAuthenticated: false, error };

      expect(loginReducer(undefined, action)).toEqual(expectedState);
    });
  });
});
