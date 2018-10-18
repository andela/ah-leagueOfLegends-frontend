import axios from 'axios';

import { BACKEND_URL } from '../../../utils/config';
import { FETCH_ARTICLE, FETCH_SUCCESS, FETCH_FAILURE } from './constant';

export const fetchArticle = () => ({ type: FETCH_ARTICLE });

// eslint-disable-next-line
const articleFectSuccsess = payload => ({ type: FETCH_SUCCESS, payload: payload.data.article.article });

const articleFectFailure = error => ({ type: FETCH_FAILURE, error });

const fetchArticles = slug => (dispatch) => {
  dispatch(fetchArticle());
  axios.get(`${BACKEND_URL}api/articles/${slug}`)
    .then((res) => {
      dispatch(articleFectSuccsess(res));
    })
    .catch(err => dispatch(articleFectFailure(err)));
};

export default fetchArticles;
