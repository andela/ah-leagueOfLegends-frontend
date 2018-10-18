import { RATE_ARTICLE, CURRENT_RATE, RATING_FAILURE } from './actions/types';
import ratingReducer from './reducers/ratingReducer';

describe('rate ratingReducer', () => {
  const state = {};

  it('should have default state/initail state', () => {
    expect(ratingReducer(state, 'ACTION_NOT_EXIST')).toEqual(state);
  });
  it('Handles rating error response', () => {
    expect(
      ratingReducer(undefined, {
        type: RATING_FAILURE,
        payload: 'You cannot rate your article',
      }),
    ).toEqual({
      ...state,
      ratingError: 'You cannot rate your article',
    });
  });
  it('Handles sucessful rating of an article', () => {
    expect(ratingReducer(undefined, { type: CURRENT_RATE, payload: { userRating: 2 } })).toEqual({
      ...state,
      rating: 2,
    });
  });
  it('Rates and returns the rating', () => {
    expect(
      ratingReducer(undefined, { type: RATE_ARTICLE, rate: { ratings: { stars: 2 } } }),
    ).toEqual({
      ...state,
      rating: 2,
    });
  });
});
