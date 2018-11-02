import axios from 'axios';

import { FETCH_COMMENT, FETCH_COMMENT_FAIL, FETCH_COMMENT_SUCCSESS } from './constant';
import { BACKEND_URL } from '../../../utils/config';


export const commentSuccess = payload => ({ type: FETCH_COMMENT_SUCCSESS, payload });

export const commentFailure = error => ({ type: FETCH_COMMENT_FAIL, error });

export const commentFetch = () => ({ type: FETCH_COMMENT });

export const getComments = slug => (dispatch) => {
  const MAIN_URL = `${BACKEND_URL}api/articles/${slug}/comments`;
  axios.get(MAIN_URL)
    .then(res => dispatch(commentSuccess(res)))
    .catch(err => dispatch(commentFailure(err)));
};
