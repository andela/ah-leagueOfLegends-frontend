// authReducer.js

import { REG_FAILED, REG_SUCCESSFUL, IS_FETCHING } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {},

  error: {
    username: undefined,
    email: undefined,
    password: undefined,
  },
  message: undefined,
  isFetching: false,
  reg_status: false,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case IS_FETCHING:
      return {
        ...state,
        isFetching: true,
        reg_status: false,
      };

    case REG_SUCCESSFUL:
      return {
        ...state,
        reg_status: true,
        isAuthenticated: false,
        error: {},
        message: payload,
      };
    case REG_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        reg_status: false,
        error: {
          username: payload.error.username,
          email: payload.error.email,
          password: payload.error.password,
        },
        message: undefined,
      };
    default:
      return state;
  }
}
