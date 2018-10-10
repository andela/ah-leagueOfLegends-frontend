// actions.js

import axios from 'axios';
import history from '../history';
import { REG_FAILED, REG_SUCCESSFUL } from './types';

export const regFailed = error => ({
  type: REG_FAILED,
  payload: { error },
});

export const regSuccessful = () => ({
  type: REG_SUCCESSFUL,
  payload: 'Please verify your email address to continue the registration.',
});

export const registerUser = user => (dispatch) => {
  axios
    .post('http://127.0.0.1:8000/api/users/', { user })
    .then((res) => {
      if (res.status === 201) {
        dispatch(regSuccessful());
        history.push('/Success');
      }
    })
    .catch((err) => {
      dispatch(regFailed(err.response.data.errors));
    });
};
