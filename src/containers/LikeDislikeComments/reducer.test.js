import * as actions from './actions';
import likeDislikeCommentReducer from './reducer';

describe('likeDislikeComment reducers', () => {
  // LIKE_COMMENT
  it('should set isLiking to true', () => {
    const initialState = {
      error: {},
      isLiking: false,
      isDisliking: false,
    };
    const action = actions.likeComment();

    const newState = likeDislikeCommentReducer(initialState, action);
    // tests the number of objects returned == 3
    expect(Object.keys(newState).length).toEqual(3);
    // test if isLiking: true,
    expect(newState.isLiking).toBe(true);
    // test if isDisliking: false,
    expect(newState.isDisliking).toBe(false);
  });

  // LIKE_DISLIKE_FAILURE
  it('should set isDisliking and isLiking to False', () => {
    const initialState = {
      error: {},
      isLiking: false,
      isDisliking: false,
    };
    const errors = {
      errors: {
        error:
          ['Authentication credentials were not provided.'],
      },
    };
    const action = actions.likeDislikeCommentFailure(errors);

    const newState = likeDislikeCommentReducer(initialState, action);
    // tests the number of objects returned == 3
    expect(Object.keys(newState).length).toEqual(4);
    // test if isLiking: false,
    expect(newState.isLiking).toBe(false);
    // test ifisDisliking: false,
    expect(newState.isDisliking).toBe(false);
  });

  // DISLIKE_COMMENT
  it('should set isDisliking to true', () => {
    const initialState = {
      error: {},
      isLiking: false,
      isDisliking: false,
    };
    const action = actions.dislikeComment();

    const newState = likeDislikeCommentReducer(initialState, action);
    // tests the number of objects returned == 3
    expect(Object.keys(newState).length).toEqual(3);
    // test if isLiking: false,
    expect(newState.isLiking).toBe(false);
    // test if isDisliking: true,
    expect(newState.isDisliking).toBe(true);
  });
});
