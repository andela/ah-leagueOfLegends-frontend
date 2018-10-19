const initialState = { articles: '', keyword: '' };

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_SUCCESSFULL':
      return { ...state, articles: action.payload, keyword: action.keyword };
    case 'SEARCH_FAILED':
      return { ...state, errors: action.errors };
    default:
      return state;
  }
};
