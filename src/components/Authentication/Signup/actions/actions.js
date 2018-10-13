// actions.js

import axios from 'axios';
import M from 'materialize-css';
import { REG_FAILED, REG_SUCCESSFUL } from './types';
import history from '../history';

export const regFailed = error => ({
  type: REG_FAILED,
  payload: { error },
});

export const regSuccessful = () => ({
  type: REG_SUCCESSFUL,
  payload: 'Please verify your email address to activate your account. If you do not see it, check your spam folder.',
});

export const registerUser = user => (dispatch) => {
  axios
    .post('https://ah-leagueoflegends-staging.herokuapp.com/api/users/', { user })
    .then((res) => {
      if (res.status === 201) {
        const elem = document.querySelectorAll('.modal')[0];
        const elem1 = document.querySelectorAll('.modal-overlay')[0];
        dispatch(regSuccessful());
        history.push('/Success');
        elem.style = 'display: none';
        elem1.style = 'display: none';
      }
    })
    .catch((err) => {
      dispatch(regFailed(err.response.data.errors));
    });
};
