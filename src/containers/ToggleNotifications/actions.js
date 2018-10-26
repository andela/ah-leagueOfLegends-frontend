import M from 'materialize-css';
import SUBSCRIBE_CONSTANTS from './actiontypes';
import { BACKEND_URL } from '../../utils/config';

const axios = require('axios');

const subscribeSuccess = payload => ({
  type: SUBSCRIBE_CONSTANTS.SUBSCRIBE_SUCCESS,
  payload,
});

const unsubscribeSuccess = payload => ({
  type: SUBSCRIBE_CONSTANTS.UNSUBSCRIBE_SUCCESS,
  payload,
});

const subscribeFailure = errors => ({
  type: SUBSCRIBE_CONSTANTS.SUBSCRIBE_FAILED,
  errors,
});

const unsubscribeFailure = errors => ({
  type: SUBSCRIBE_CONSTANTS.UNSUBSCRIBE_FAILED,
  errors,
});

function unSubscribeNotification() {
  const token = localStorage.getItem('access_token');
  return dispatch => axios({
    method: 'put',
    url: `${BACKEND_URL}api/notifications/unsubscribe`,
    headers: {
      'Content-Type': 'application/json',
      // eslint-disable-next-line
      Authorization: 'Bearer '+ token } },

  )
    .then((response) => {
      dispatch(unsubscribeSuccess(response.data.profile));
      M.toast({ html: response.data.profile.message, classes: 'teal rounded notify' });
    })
    .catch((error) => {
      dispatch(unsubscribeFailure(error));
    });
}

function subscribeNotification() {
  const token = localStorage.getItem('access_token');
  return dispatch => axios({
    method: 'put',
    url: `${BACKEND_URL}api/notifications/subscribe`,
    headers: {
      'Content-Type': 'application/json',
      // eslint-disable-next-line
      Authorization: 'Bearer '+ token } },

  )
    .then((response) => {
      dispatch(subscribeSuccess(response.data.profile));
      M.toast({ html: response.data.profile.message, classes: 'teal rounded notify' });
    })
    .catch((error) => {
      dispatch(subscribeFailure(error));
    });
}


export default subscribeNotification;

export { unSubscribeNotification };
