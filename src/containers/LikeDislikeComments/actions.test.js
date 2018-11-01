import * as actions from './actions';

export const LIKE_COMMENT = 'LIKE_COMMENT';
export const DISLIKE_COMMENT = 'DISLIKE_COMMENT';
export const LIKE_DISLIKE_FAILURE = 'LIKE_DISLIKE_FAILURE';


describe('Actions for likeDislike comments', () => {
  // Like articles
  it('should do an like comment action', () => {
    const expectedAction = { type: LIKE_COMMENT };
    expect(actions.likeComment()).toEqual(expectedAction);
  });

  // Dislike articles
  it('should do an dislike comment action', () => {
    const expectedAction = { type: DISLIKE_COMMENT };
    expect(actions.dislikeComment()).toEqual(expectedAction);
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
    expect(actions.likeDislikeCommentFailure(errors)).toEqual(expectedAction);
  });
});
