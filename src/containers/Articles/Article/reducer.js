import { FETCH_ARTICLE, FETCH_FAILURE, FETCH_SUCCESS } from './constant';

const initialState = {
  payload: [],
  loading: false,
  success: false,
  failed: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLE:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        payload: action.payload,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        failed: true,
      };
    default:
      return state;
  }
};
