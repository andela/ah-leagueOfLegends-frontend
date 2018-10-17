import { FETCH_COMMENT, FETCH_COMMENT_FAIL, FETCH_COMMENT_SUCCSESS } from './constant';

const initialState = {
  payload: {},
  loading: false,
  failed: false,
  success: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMENT:
      return { loading: true };
    case FETCH_COMMENT_SUCCSESS:
      return {
        payload: action.payload,
        success: true,
      };
    case FETCH_COMMENT_FAIL:
      return { failed: true };
    default:
      return state;
  }
}
