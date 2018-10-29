import axios from 'axios';
import FollowConstants from './actionTypes';
import { BACKEND_URL } from '../../utils/config';

const fetchBegin = () => ({ type: FollowConstants.REQUEST_SENT });

const getfollowingStatusSucess = payload => ({
  type: FollowConstants.GET_FOLLOW_STATUS_SUCCESS,
  payload,
});

const getfollowingStatusFailiure = payload => ({
  type: FollowConstants.GET_FOLLOW_STATUS_FAILIURE,
  payload,
});

function followingStatus(username) {
  const accessToken = localStorage.getItem('access_token');
  return (dispatch) => {
    dispatch(fetchBegin());
    return axios.get(`${BACKEND_URL}api/profiles/${username}`,
      { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` } },
    )
      .then((response) => {
        dispatch((getfollowingStatusSucess(response.data)));
      })
      .catch((error) => {
        dispatch(getfollowingStatusFailiure(error));
      });
  };
}


export default followingStatus;
