import axios from 'axios';

import { url } from '../../../config';

export const USER_SIGNUP = 'USER_SIGNUP';


export function userLogin(username, email, password) {
  return (dispatch) => {
    axios.post(`${url}/api/users/login/`, {
      username,
      email,
      password,
    })
      .then((res) => {
        const payload = res.data;
        dispatch({
          type: 'USER_SIGNUP',
          payload,
        });
      });
  };
}
