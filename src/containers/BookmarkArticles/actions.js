import axios from 'axios';
import { BOOKMARK_ARTICLE, BOOKMARK_ARTICLE_FAILURE } from './ActionTypes';
import { BACKEND_URL } from '../../utils/config';
import fetchArticles from '../Articles/Article/actions';

export const bookmarkArticle = () => ({ type: BOOKMARK_ARTICLE });

export const bookmarkArticleFailure = errors => ({
  type: BOOKMARK_ARTICLE_FAILURE,
  errors,
});

// Bookmark an article
export const bookmarkArticles = (slug) => {
  const token = localStorage.getItem('access_token');
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  const url = `${BACKEND_URL}api/articles/${slug}/bookmark/`;
  return (dispatch) => {
    dispatch(bookmarkArticle());
    return axios.put(url)
      .then(
        () => {
          dispatch(fetchArticles(slug));
        },
        (errors) => {
          dispatch(bookmarkArticleFailure(errors));
        },
      );
  };
};
