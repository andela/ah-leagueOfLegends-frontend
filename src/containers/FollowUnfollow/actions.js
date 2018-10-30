import axios from 'axios';
import FollowConstants from './actionTypes';
import { BACKEND_URL } from '../../utils/config';

const fetchBegin = () => ({ type: FollowConstants.REQUEST_SENT });

const followSuccess = payload => ({
  type: FollowConstants.FOLLOW_SUCCESS,
  payload,
});

const followFailiure = payload => ({
  type: FollowConstants.FOLLOW_FAILIURE,
  payload,
});

function followUser(username) {
  const accessToken = localStorage.getItem('access_token');
  return (dispatch) => {
    dispatch(fetchBegin());
    axios({
      method: 'put',
      url: `${BACKEND_URL}api/profiles/${username}/follow`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        dispatch((followSuccess(response.data)));
      })
      .catch((error) => {
        dispatch(followFailiure(error));
      });
  };
}


export default followUser;
