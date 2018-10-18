import * as actions from './actions';
import {
  DISLIKE_ARTICLE,
  LIKE_ARTICLE, LIKE_DISLIKE_FAILURE,
} from './ActionTypes';

describe('Actions for likeDislike articles', () => {
  // Like articles
  it('should do an like article action', () => {
    const expectedAction = { type: LIKE_ARTICLE };
    expect(actions.likeArticle()).toEqual(expectedAction);
  });

  // Dislike articles
  it('should do an dislike article action', () => {
    const expectedAction = { type: DISLIKE_ARTICLE };
    expect(actions.dislikeArticle()).toEqual(expectedAction);
  });

  // Dispatch error when likeDislike article fails
  it('should dispatch errors when likeDislike fails', () => {
    const errors = {
      errors: {
        error:
          ['Authentication credentials were not provided.'],
      },
    };
    const expectedAction = {
      type: LIKE_DISLIKE_FAILURE,
      errors,
    };
    expect(actions.likeDislikeArticleFailure(errors)).toEqual(expectedAction);
  });
});
