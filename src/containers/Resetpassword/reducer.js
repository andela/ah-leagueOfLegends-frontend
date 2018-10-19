import { LINK_FAILURE, LINK_SUCCESS, LINK_REQUEST } from './actions';

const initialState = {
  payload: {},
  errors: null,
  success: false,
  failure: false,
};

export default (state = initialState, action) => {
  const { errors, payload, type } = action;
  switch (type) {
    case LINK_SUCCESS:
      return {
        ...state,
        payload,
        errors: null,
        success: true,
        failure: false,
      };
    case LINK_FAILURE:
      return {
        ...state,
        errors,
        payload: {},
        failure: true,
        success: false,
      };
    case LINK_REQUEST:
      return { ...state, isFetching: true };
    default:
      return state;
  }
};
