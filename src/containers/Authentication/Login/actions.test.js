import configureStore from 'redux-mock-store';

import * as LoginActions from './actions';

const mockStore = configureStore();
const store = mockStore();

describe('loginActions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('loginSuccess', () => {
    test('dispatches the correct action and payload', () => {
      const user = {
        user: {
          email: 'testuser@gmail.com',
          password: 'letmein',
        },
      };
      const expectedActions = [
        {
          type: 'USERS_LOGIN_SUCCESS',
          payload: user,
        },
      ];
      store.dispatch(LoginActions.loginSuccess(user));
      expect(store.getActions()).toEqual(expectedActions);
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  describe('loginFailure', () => {
    test('dispatches the correct action and payload', () => {
      const error = 'User with that email and password was not found';
      const expectedActions = [
        {
          type: 'USERS_LOGIN_FAILURE',
          error,
        },
      ];
      store.dispatch(LoginActions.loginFailure(error));
      expect(store.getActions()).toEqual(expectedActions);
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
