import
{ BOOKMARK_ARTICLE, BOOKMARK_ARTICLE_FAILURE } from './ActionTypes';

const previousState = {
  error: {},
  isBookmarking: false,
};

const bookmarkArticlesReducer = (state = previousState, action) => {
  const { type, errors } = action;
  switch (type) {
    case BOOKMARK_ARTICLE:
      return {
        ...state,
        isBookmarking: true,

      };
    case BOOKMARK_ARTICLE_FAILURE:
      return {
        ...state,
        isBookmarking: false,
        errors,
      };
    default:
      return state;
  }
};

export default bookmarkArticlesReducer;
