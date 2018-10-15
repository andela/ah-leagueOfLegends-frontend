import { REG_SUCCESSFUL, REG_FAILED } from './actions/types';
import authReducer from './reducers/authReducer';

describe('User registration', () => {
  const state = {};
  let payload = {};

  it('Should be successful', () => {
    payload = 'Please verify your email address to activate your account. If you do not see it, check your spam folder.';
    const expected = {
      reg_status: true,
      isAuthenticated: false,
      error: {},
      message: payload,
    };
    expect(authReducer(state, { type: REG_SUCCESSFUL, payload })).toEqual(expected);
  });

  it('Should fail', () => {
    payload = {
      error: {
        username: 'some name',
        email: 'some email',
        password: 'a weak password',
      },
    };

    const expected = {
      isAuthenticated: false,
      user: null,
      reg_status: false,
      error: {
        username: 'some name',
        email: 'some email',
        password: 'a weak password',
      },
      message: undefined,
    };
    expect(authReducer(state, { type: REG_FAILED, payload })).toEqual(expected);
  });
});
