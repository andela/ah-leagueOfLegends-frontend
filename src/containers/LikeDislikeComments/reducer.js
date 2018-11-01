import { DISLIKE_COMMENT, LIKE_COMMENT, LIKE_DISLIKE_FAILURE } from './actions';

const initialState = {
  error: {},
  isLiking: false,
  isDisliking: false,
};

const likeDislikeCommentReducer = (state = initialState, action) => {
  const { type, errors } = action;
  switch (type) {
    case LIKE_COMMENT:
      return {
        ...state,
        isLiking: true,
        isDisliking: false,
      };
    case DISLIKE_COMMENT:
      return {
        ...state,
        isDisliking: true,
        isLiking: false,
      };
    case LIKE_DISLIKE_FAILURE:
      return {
        ...state,
        isDisliking: false,
        isLiking: false,
        errors,
      };
    default:
      return state;
  }
};

export default likeDislikeCommentReducer;
