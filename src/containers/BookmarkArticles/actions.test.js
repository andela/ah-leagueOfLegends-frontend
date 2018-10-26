import * as actions from './actions';
import { BOOKMARK_ARTICLE, BOOKMARK_ARTICLE_FAILURE } from './ActionTypes';

describe('Actions for bookmark articles', () => {
  // Bookmark articles
  it('should do a bookmark article action', () => {
    const expectedAction = { type: BOOKMARK_ARTICLE };
    expect(actions.bookmarkArticle()).toEqual(expectedAction);
  });

  // Dispatch error when bookmark article fails
  it('should dispatch errors when bookmark fails', () => {
    const errors = {
      errors: {
        error:
          ['Authentication credentials were not provided.'],
      },
    };
    const expectedAction = {
      type: BOOKMARK_ARTICLE_FAILURE,
      errors,
    };
    expect(actions.bookmarkArticleFailure(errors)).toEqual(expectedAction);
  });
});
