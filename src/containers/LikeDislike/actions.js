import axios from 'axios';
import { DISLIKE_ARTICLE, LIKE_ARTICLE, LIKE_DISLIKE_FAILURE } from "./ActionTypes";
import { BACKEND_URL } from "../../utils/config";

export const likeArticle = () => ({ type: LIKE_ARTICLE });

export const dislikeArticle = ()=> ({
  type: DISLIKE_ARTICLE,
});

export const likeDislikeArticleFailure = errors => ({
  type: LIKE_DISLIKE_FAILURE,
  errors,
});

export const likeDislikeArticleSuccess = article => ({
  type: GET_ARTICLES,
  payload: article,
});

// like and article
export const likeArticles = slug => {
  const url = `${BACKEND_URL}api/articles/${slug}/like/`;
  const token = localStorage.getItem('access_token');
  return (dispatch) => {
    dispatch(likeArticle());
    return axios.put(url,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            `Bearer ${token}`,
        },
      },
    ).then(
      (response) => {
        const userArray = response.data;
        dispatch(likeDislikeArticleSuccess(userArray));
      },
      (errors) => {
        dispatch(likeDislikeArticleFailure(errors));
      },
    );
  };
};

export const dislikeArticles = slug => {
  const url = `${BACKEND_URL}api/articles/${slug}/dislike/`;
  const token = localStorage.getItem('access_token');
  return (dispatch) => {
    dispatch(dislikeArticle());
    return axios.put(url,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            `Bearer ${token}`,
        },
      },
    ).then(
      (response) => {
        const userArray = response.data;
        dispatch(likeDislikeArticleSuccess(userArray));
      },
      (errors) => {
        dispatch(likeDislikeArticleFailure(errors));
      },
    );
  };
};

