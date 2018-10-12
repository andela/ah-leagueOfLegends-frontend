// actions.js

import axios from 'axios';
import { REG_FAILED, REG_SUCCESSFUL } from './types';

export const regFailed = error => ({
  type: REG_FAILED,
  payload: { error },
});

export const regSuccessful = () => ({
  type: REG_SUCCESSFUL,
  payload: 'Please verify your email address to activate your account.',
});

export const registerUser = user => (dispatch) => {
  axios
    .post('https://ah-leagueoflegends-staging.herokuapp.com/api/users/', { user })
    .then((res) => {
      if (res.status === 201) {
        dispatch(regSuccessful());
      }
    })
    .catch((err) => {
      dispatch(regFailed(err.response.data.errors));
    });
};
