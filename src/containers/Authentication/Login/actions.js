import axios from 'axios';

import { url } from '../../../config';

export const USER_LOGIN = 'USER_LOGIN';


export function userLogin(email, password) {
  return (dispatch) => {
    axios.post(`${url}/api/users/login/`, {
      email,
      password,
    })
      .then((res) => {
        const payload = res.data;
        dispatch({
          type: 'USER_LOGIN',
          payload,
        });
      });
  };
}
