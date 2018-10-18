import { DISLIKE_ARTICLE, LIKE_ARTICLE, LIKE_DISLIKE_FAILURE } from "./ActionTypes";

const previousState = {
  error: {},
  isLiking: false,
  isDisliking: false,
};

const likeDislikeArticleReducer = (state = previousState, action) => {
  const { type, errors } = action;
  switch (type) {
    case LIKE_ARTICLE:
      return {
        ...state,
        isLiking: true,
        isDisliking: false,
      };
    case DISLIKE_ARTICLE:
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

export default likeDislikeArticleReducer();
