import expect from 'expect';
import forgotPasswordReducer from './reducer';

export const LINK_REQUEST = 'LINK_REQUEST';
export const LINK_SUCCESS = 'LINK_SUCCESS';
export const LINK_FAILURE = 'LINK_FAILURE';

const initialState = {
  payload: {},
  errors: null,
  success: false,
  failure: false,
};
const action = {
  payload: {}, errors: null, success: false, failure: false,
};

describe('ForgotPassword Reducer test', () => {
  it('should return initial state when there is no action', () => {
    expect(forgotPasswordReducer(initialState, action)).toEqual(initialState);
  });


  it('should handle LINK_SUCCESS', () => {
    action.type = LINK_SUCCESS;
    expect(forgotPasswordReducer(initialState, action).success).toEqual(true);
    expect(forgotPasswordReducer(initialState.state, action).failure).toEqual(false);
  });

  it('should handle LINK_FAILURE', () => {
    action.type = LINK_FAILURE;
    expect(forgotPasswordReducer(initialState.state, action).failure).toEqual(true);
    expect(forgotPasswordReducer(initialState.state, action).success).toEqual(false);
  });
});
