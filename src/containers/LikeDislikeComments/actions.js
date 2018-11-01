import axios from 'axios';
import { BACKEND_URL } from '../../utils/config';
import getComments from '../comments/getComents/actions';

export const LIKE_COMMENT = 'LIKE_COMMENT';
export const DISLIKE_COMMENT = 'DISLIKE_COMMENT';
export const LIKE_DISLIKE_FAILURE = 'LIKE_DISLIKE_FAILURE';

export const likeComment = () => ({ type: LIKE_COMMENT });

export const dislikeComment = () => ({ type: DISLIKE_COMMENT });

export const likeDislikeCommentFailure = errors => ({
  type: LIKE_DISLIKE_FAILURE,
  errors,
});

// like a comment
export const likeComments = (slug, id) => {
  const token = localStorage.getItem('access_token');
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  const url = `${BACKEND_URL}api/articles/${slug}/comments/${id}/like`;
  return (dispatch) => {
    dispatch(likeComment());
    return axios.put(url)
      .then(() => {
        dispatch(getComments(slug, id));
      })
      .catch((err) => {
        dispatch(likeDislikeCommentFailure(err));
      },
      );
  };
};

// dislike a comment
export const dislikeComments = (slug, id) => {
  const url = `${BACKEND_URL}api/articles/${slug}/comments/${id}/dislike`;
  const token = localStorage.getItem('access_token');
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  return (dispatch) => {
    dispatch(dislikeComment());
    return axios.put(url)
      .then(() => {
        dispatch(getComments(slug, id));
      })
      .catch((err) => {
        dispatch(likeDislikeCommentFailure(err));
      },
      );
  };
};
