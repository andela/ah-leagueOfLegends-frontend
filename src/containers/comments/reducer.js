import { COMMENT_SUCCESS, COMMENT_FAILURE, COMMENT_FETCH } from './constants';

const initialState = {
  payload: {},
  publishing: false,
  failure: false,
  success: false,
  error: undefined,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case COMMENT_FETCH:
      return {
        ...state,
        publishing: true,
      };
    case COMMENT_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        publishing: false,
        success: true,
      };
    case COMMENT_FAILURE:
      return {
        ...state,
        failure: true,
        error: action.error,
      };
    default:
      return state;
  }
}
