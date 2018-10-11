import { PUBLISH_ARTICLE } from './constants';

const initialState = {
  payload: {},
  publishing: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PUBLISH_ARTICLE:
      return {
        ...state,
        payload: action.data,
        publishing: true,
      };
    default:
      return state;
  }
}
