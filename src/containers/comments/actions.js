import axios from 'axios';

import { BACKEND_URL } from '../../utils/config';
import { COMMENT_SUCCESS, COMMENT_FAILURE, COMMENT_FETCH } from './constants';

export const commentSuccess = payload => ({ type: COMMENT_SUCCESS, payload });

export const commentFailure = error => ({ type: COMMENT_FAILURE, error });

export const commentFetch = () => ({ type: COMMENT_FETCH });


const publishComment = (payloadData, slug, method, update = false, commentId) => (dispatch) => {
  let data = { comment: { body: payloadData } };
  if (method === 'PUT') {
    data = { body: payloadData };
  }
  dispatch(commentFetch());
  let MAIN_URL = `${BACKEND_URL}api/articles/${slug}/comments`;
  const token = localStorage.getItem('access_token');
  if (update) {
    MAIN_URL = `${BACKEND_URL}api/articles/${slug}/comments/${commentId}`;
  }
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  switch (method) {
    case 'POST':
      axios.post(MAIN_URL, data)
        .then((res) => {
          dispatch(commentSuccess(res));
        })
        .catch(err => dispatch(commentFailure(err)));
      break;
    case 'PUT':
      axios.put(MAIN_URL, data, slug, commentId)
        .then((res) => {
          dispatch(commentSuccess(res));
        })
        .catch(err => dispatch(commentFailure(err)));
      break;
    case 'DELETE':
      axios.delete(MAIN_URL)
        .then((res) => {
          dispatch(commentSuccess(res));
        })
        .catch(err => dispatch(commentFailure(err)));
      break;
    default:
      axios.get(MAIN_URL)
        .then((res) => {
          dispatch(commentSuccess(res));
        })
        .catch(err => dispatch(commentFailure(err)));
  }
};

export default publishComment;
