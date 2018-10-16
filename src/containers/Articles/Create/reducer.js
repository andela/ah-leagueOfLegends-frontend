import { ARTICLE_SUCCESS, ARTICLE_FAILURE, PUBLISH_ARTICLE } from './constants';

const initialState = {
  payload: {},
  publishing: false,
  success: false,
  failure: false,
  error: undefined,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PUBLISH_ARTICLE:
      return {
        ...state,
        publishing: true,
      };
    case ARTICLE_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        publishing: true,
        success: true,
      };
    case ARTICLE_FAILURE:
      return {
        ...state,
        failure: true,
        error: action.errors,
      };
    default:
      return state;
  }
}
