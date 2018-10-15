import LoginConstants from './actiontypes';
import history from '../../../../History';

const axios = require('axios');

const loginSuccess = payload => ({
  type: LoginConstants.LOGIN_SUCCESS,
  payload,
});

const loginFailure = error => ({
  type: LoginConstants.LOGIN_FAILURE,
  error,
});

function socialLogin(provider, accessToken) {
  return dispatch => axios.post('https://ah-leagueoflegends-staging.herokuapp.com/api/users/social_auth/',
    { provider, access_token: accessToken },
    { headers: { 'Content-Type': 'application/json' } })
    .then((response) => {
      dispatch(loginSuccess(response.data));
      const { token } = response.data.user;
      localStorage.setItem('access_token', token);
      history.push('/');
      window.location.reload();
    })
    .catch((error) => {
      dispatch(loginFailure(error));
    });
}

export default socialLogin;
