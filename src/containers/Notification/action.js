
import NotificationConstants from './actiontypes';
import { BACKEND_URL } from '../../utils/config';

const axios = require('axios');

const fetchBegin = () => ({ type: NotificationConstants.NOTIFICATION_REQUEST });

const notificationSuccess = payload => ({
  type: NotificationConstants.NOTIFICATION_SUCCESS,
  payload,
});

const notificationFailiure = error => ({
  type: NotificationConstants.NOTIFICATION_FAILIURE,
  error,
});

function getSingleNotifications(id) {
  const accessToken = localStorage.getItem('access_token');
  return (dispatch) => {
    dispatch(fetchBegin());
    return axios.get(`${BACKEND_URL}api/notifications/${id}`,
      { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` } },
    )
      .then((response) => {
        // dispatch((notificationReadSuccess(response.data)));
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

function getNotifications() {
  const accessToken = localStorage.getItem('access_token');
  return (dispatch) => {
    dispatch(fetchBegin());
    return axios.get(`${BACKEND_URL}api/notifications`,
      { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` } },
    )
      .then((response) => {
        dispatch((notificationSuccess(response.data)));
      })
      .catch((error) => {
        dispatch(notificationFailiure(error));
      });
  };
}

export default getNotifications;

export { notificationSuccess };
export { notificationFailiure };
export { getSingleNotifications };
