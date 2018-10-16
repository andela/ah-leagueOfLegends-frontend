import configureStore from 'redux-mock-store';
import * as SocialLoginActions from './actions';

const mockstore = configureStore();
const store = mockstore();

describe('socialLoginActions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('loginSuccess', () => {
    test('dispatches the correct action and payload ', () => {
      const user = {
        user: {
          email: 'test@email.com',
          username: 'jon doe',
          bio: '',
          image: 'img.url',
          token: 'token',
        },
      };
      const expectedActions = [
        {
          type: 'USERS_LOGIN_SUCCESS',
          payload: user,
        },
      ];
      store.dispatch(SocialLoginActions.loginSuccess(user));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('loginFailure', () => {
    test('dispatches the correct action and payload', () => {
      const error = 'error';
      const expectedActions = [
        {
          type: 'USERS_LOGIN_FAILURE',
          error,
        },
      ];
      store.dispatch(SocialLoginActions.loginFailure(error));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
},
);
