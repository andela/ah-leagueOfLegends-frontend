import * as actions from './actions';
import bookmarkArticlesReducer from './reducers';

describe('bookmarkArticles reducer', () => {
  // BOOKMARK_ARTICLE
  it('should set isBookmarking to true', () => {
    const previousState = {
      error: {},
      isBookmarking: false,
    };
    const action = actions.bookmarkArticle();

    const newState = bookmarkArticlesReducer(previousState, action);
    // tests the number of objects returned == 2
    expect(Object.keys(newState).length).toEqual(2);
    // test if isBookmarking: true,
    expect(newState.isBookmarking).toBe(true);
  });

  // BOOKMARK_ARTICLE_FAILURE
  it('should set isBookmarking to False', () => {
    const previousState = {
      error: {},
      isBookmarking: false,
    };
    const errors = {
      errors: {
        error:
          ['Authentication credentials were not provided.'],
      },
    };
    const action = actions.bookmarkArticleFailure(errors);

    const newState = bookmarkArticlesReducer(previousState, action);
    // tests the number of objects returned == 3
    expect(Object.keys(newState).length).toEqual(3);
    // test if isBookmarking: false,
    expect(newState.isBookmarking).toBe(false);
  });
});
