import axios from 'axios';

import { BACKEND_URL } from '../../../utils/config';
import { ARTICLE_SUCCESS, ARTICLE_FAILURE, PUBLISH_ARTICLE } from './constants';

export const articleSuccess = payload => ({ type: ARTICLE_SUCCESS, payload });

export const articleFailure = errors => ({ type: ARTICLE_FAILURE, errors });

export const articleFetch = () => ({ type: PUBLISH_ARTICLE });

const publishArticle = (data, history, update = false, slug) => (dispatch) => {
  dispatch(articleFetch());
  let MAIN_URL = `${BACKEND_URL}api/articles`;
  if (update) {
    MAIN_URL = `${BACKEND_URL}api/articles/${slug}`;
  }
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NiwiZXhwIjoxNTQxNzUzNjc0fQ.aP0y7XZbbq5wVp-SqWmpx3n4wERppmqCCCCQYqQB5uI';
  // eslint-disable-next-line
  axios.defaults.headers.common = { Authorization: 'Bearer ' + token }
  axios.post(MAIN_URL, data)
    .then((res) => {
      dispatch(articleSuccess(res));
      history.push(`/article/${res.data.articles.slug}`);
    })
    .catch(err => dispatch(articleFailure(err)));
};

export default publishArticle;
