import axios from 'axios';
import { BACKEND_URL } from '../../../utils/config';
import {
  RATE_ARTICLE, CURRENT_RATE, RATING_FAILURE, CURRENT_AVG,
} from './types';
// action creator: takes user rate and returns RATE_ARTICLE action
export const rateAction = rate => ({
  type: RATE_ARTICLE,
  rate,
});
// action creator: takes a response and returns type CURRENT_RATE
export const currentRate = response => ({
  type: CURRENT_RATE,
  payload: { userRating: response === undefined ? 0 : response },
});
// action creator: takes response and returns type CURRENT_AVG
export const currentAVG = response => ({
  type: CURRENT_AVG,
  payload: { average_rating: response === undefined ? 0 : response },
});
// action creator: takes an err and returns type RATING_FAILURE
export const ratingError = (err) => {
  return {
    type: RATING_FAILURE,
    payload: err,
  };
};
// Gets an article slug and dispatches a get request to the API
// Returns initial rating
export const InitialRate = slug => (dispatch) => {
  const token = localStorage.getItem('access_token');

  axios({
    method: 'get',
    url: `${BACKEND_URL}api/articles/${slug}/rate/`,
    headers: {
      'Content-Type': 'application/json',
      // eslint-disable-next-line
      Authorization: 'Bearer ' + token,
    },
  }).then((response) => {
    const data = response.data.rate.rating;
    dispatch(currentRate(data));
  });
};
// Gets an article slug and dispatches currentAVG to the API
// Returns an article's current rating
export const avarageRate = slug => (dispatch) => {
  const token = localStorage.getItem('access_token');
  axios({
    method: 'get',
    url: `${BACKEND_URL}api/articles/${slug}`,
    headers: {
      'Content-Type': 'application/json',
      // eslint-disable-next-line
      Authorization: 'Bearer ' + token,
    },
  }).then((response) => {
    const data = response.data.article.article.avarage_ratings;
    dispatch(currentAVG(data));
  });
};
// Gets an article slug and dispatches rateArticle
// Returns AVG Rating after successful rating
export const rateArticle = (slug, rate) => (dispatch) => {
  const token = localStorage.getItem('access_token');
  const url = `${BACKEND_URL}api/articles/${slug}/rate/`;
  axios({
    method: 'post',
    url,
    data: {
      rate: {
        rating: rate,
        note: 'I love this article',
      },
    },
    headers: {
      'Content-Type': 'application/json',
      // eslint-disable-next-line
      Authorization: 'Bearer ' + token,
    },
  })
    .then((response) => {
      dispatch(currentAVG(response.data.rate.average_rating));
      dispatch(InitialRate(slug));
    })
    .catch((err) => {
      dispatch(ratingError(err.response.data.rate.message));
    });
};
