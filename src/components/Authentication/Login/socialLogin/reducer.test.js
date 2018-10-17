import { SocialLoginReducer } from './reducer';

describe('social_login_reducer', () => {
  describe('INITIAL_STATE', () => {
    test('initial_state_is_correct', () => {
      const action = { type: 'WRONG ACTION' };
      const initialState = { isAuthenticated: false };

      expect(SocialLoginReducer(undefined, action)).toEqual(initialState);
    });
  });

  describe('USERS_LOGIN_SUCCESS', () => {
    test('returns correct state', () => {
      const user = {
        user: {
          user: {
            email: 'test@email.com',
            usaername: 'jon doe',
            bio: '',
            image: 'img.url',
            token: 'token',
          },
        },
      };
      const action = { type: 'USERS_LOGIN_SUCCESS', payload: user };
      const expectedState = { isAuthenticated: true, user };

      expect(SocialLoginReducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe('USERS_LOGIN_FAILURE', () => {
    test('returns correct state', () => {
      const error = 'The requested user cannot be found';
      const action = { type: 'USERS_LOGIN_FAILURE', error };
      const expectedState = { isAuthenticated: false, error };

      expect(SocialLoginReducer(undefined, action)).toEqual(expectedState);
    });
  });
});
