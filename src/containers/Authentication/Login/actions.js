import LoginConstants from './actiontypes';
import { BACKEND_URL } from '../../../utils/config';

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
    return axios.post(`${BACKEND_URL}api/users/login/`,
      { user: { email, password } },
      { headers: { 'Content-Type': 'application/json' } })
      .then((response) => {
        dispatch(loginSuccess(response.data));
        const { token } = response.data.user;
        localStorage.setItem('access_token', token);
        window.location.reload(true);
      })
      .catch((error) => {
        dispatch(loginFailure(error.response.data.errors.error[0]));
      });
  };
}
export default login;

export { loginSuccess };
export { loginFailure };
