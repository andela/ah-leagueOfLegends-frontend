import {
  RATE_ARTICLE, CURRENT_RATE, RATING_FAILURE, CURRENT_AVG,
} from '../actions/types';

const initialState = { average_rating: undefined };
export default function (state = initialState, action) {
  switch (action.type) {
    // Handle article rating
    case RATE_ARTICLE:
      return { ...state, rating: action.rate.ratings.stars };
    // Return initial user rating
    case CURRENT_RATE:
      return {
        ...state,
        rating: action.payload.userRating,
      };
    // Handle getting rating average
    case CURRENT_AVG:
      return {
        ...state,
        average_rating: action.payload.average_rating,
      };
    // Handle rating failure
    case RATING_FAILURE:
      return {
        ...state,
        ratingError: action.payload,
      };
    // If passed action has no matching action return pervious state
    default:
      return state;
  }
}
