import LoginConstants from './actiontypes';
import history from '../../../history';

const axios = require('axios');

const loginRequest = () => ({ type: LoginConstants.LOGIN_REQUEST });
const loginSuccess = payload => ({
  type: LoginConstants.LOGIN_SUCCESS,
  payload,
});
const loginFailure = error => ({
  type: LoginConstants.LOGIN_FAILURE,
  error,
});
function login(email, password) {
  return (dispatch) => {
    dispatch(loginRequest);
    return axios.post('https://ah-leagueoflegends-staging.herokuapp.com/api/users/login/',
      { user: { email, password } },
      { headers: { 'Content-Type': 'application/json' } })
      .then((response) => {
        const elem = document.querySelectorAll('.modal')[0];
        const elem1 = document.querySelectorAll('.modal-overlay')[0];
        dispatch(loginSuccess(response.data));
        const { token } = response.data.user;
        localStorage.setItem('access_token', token);
        history.push('/');
        elem.style = 'display: none';
        elem1.style = 'display: none';
      })
      .catch((error) => {
        dispatch(loginFailure(error.response.data.errors.error[0]));
      });
  };
}
export default login;
