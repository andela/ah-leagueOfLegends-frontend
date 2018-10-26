import axios from 'axios';

import { BACKEND_URL } from '../../../utils/config';
import { ARTICLE_SUCCESS, ARTICLE_FAILURE, GET_ARTICLES } from './constants';

export const articleSuccess = payload => ({ type: ARTICLE_SUCCESS, payload });

export const articleFailure = errors => ({ type: ARTICLE_FAILURE, errors });

export const articleFetch = () => ({ type: GET_ARTICLES });

export const getArticles = (limit, offset) => (dispatch) => {
  dispatch(articleFetch());
  const MAIN_URL = ` ${BACKEND_URL}api/articles?limit=${limit}&offset=${offset}`;
  axios.get(MAIN_URL)
    .then(res => dispatch(articleSuccess(res)))
    .catch(err => dispatch(articleFailure(err)));
};
