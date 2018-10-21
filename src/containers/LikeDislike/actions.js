import axios from 'axios';
import { DISLIKE_ARTICLE, LIKE_ARTICLE, LIKE_DISLIKE_FAILURE } from './ActionTypes';
import { BACKEND_URL } from '../../utils/config';
import fetchArticles from '../Articles/Article/actions';

export const likeArticle = () => ({ type: LIKE_ARTICLE });

export const dislikeArticle = () => ({ type: DISLIKE_ARTICLE });

export const likeDislikeArticleFailure = errors => ({
  type: LIKE_DISLIKE_FAILURE,
  errors,
});

// like an article
export const likeArticles = (slug) => {
  const token = localStorage.getItem('access_token');
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  const url = `${BACKEND_URL}api/articles/${slug}/like/`;
  return (dispatch) => {
    dispatch(likeArticle());
    return axios.put(url)
      .then(
        () => {
          dispatch(fetchArticles(slug));
        },
        (errors) => {
          dispatch(likeDislikeArticleFailure(errors));
        },
      );
  };
};

// dislike an article
export const dislikeArticles = (slug) => {
  const url = `${BACKEND_URL}api/articles/${slug}/dislike/`;
  const token = localStorage.getItem('access_token');
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  return (dispatch) => {
    dispatch(dislikeArticle());
    return axios.put(url)
      .then(
        () => {
          dispatch(fetchArticles(slug));
        },
        (errors) => {
          dispatch(likeDislikeArticleFailure(errors));
        },
      );
  };
};
