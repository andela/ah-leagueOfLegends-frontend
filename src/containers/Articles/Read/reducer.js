import { GET_ARTICLES } from './constants';

const initialState = {
  all_articles: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        all_articles: action.payload,
      };
    default:
      return state;
  }
};
