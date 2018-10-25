import { GET_ARTICLES, ARTICLE_SUCCESS, ARTICLE_FAILURE } from './constants';

const initialState = {
  all_articles: [],
  loading: false,
  failed: false,
  success: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        loading: true,
      };
    case ARTICLE_SUCCESS:
      return {
        ...state,
        all_articles: action.payload.data.articles.results,
        loading: true,
        success: true,
      };
    case ARTICLE_FAILURE:
      return {
        ...state,
        failed: true,
      };
    default:
      return state;
  }
};
