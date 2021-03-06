import axios from 'axios';
import FollowConstants from './actionTypes';
import { BACKEND_URL } from '../../utils/config';
import { viewProfileFollowSuccess } from '../Profile/ViewProfile/actions';

const fetchBegin = () => ({ type: FollowConstants.REQUEST_SENT });

export const followSuccess = payload => ({
  type: FollowConstants.FOLLOW_SUCCESS,
  payload,
});

export const followFailiure = payload => ({
  type: FollowConstants.FOLLOW_FAILIURE,
  payload,
});

export const getfollowersSucess = payload => ({
  type: FollowConstants.GET_FOLLOWERS_SUCCESS,
  payload,
});

export const getfollowingSucess = payload => ({
  type: FollowConstants.GET_FOLLOWING_SUCCESS,
  payload,
});

export const getfollowFailiure = payload => ({
  type: FollowConstants.GET_FOLLOW_FAILIURE,
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
        dispatch(viewProfileFollowSuccess(response.data));
      })
      .catch((error) => {
        dispatch(followFailiure(error));
      });
  };
}

function getfollowers(username) {
  const accessToken = localStorage.getItem('access_token');
  return (dispatch) => {
    dispatch(fetchBegin());
    return axios.get(`${BACKEND_URL}api/profiles/${username}/followers`,
      { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` } },
    )
      .then((response) => {
        dispatch((getfollowersSucess(response.data)));
      })
      .catch((error) => {
        dispatch(getfollowFailiure(error));
      });
  };
}

function getfollowing(username) {
  const accessToken = localStorage.getItem('access_token');
  return (dispatch) => {
    dispatch(fetchBegin());
    return axios.get(`${BACKEND_URL}api/profiles/${username}/following`,
      { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` } },
    )
      .then((response) => {
        dispatch((getfollowingSucess(response.data)));
      })
      .catch((error) => {
        dispatch(getfollowFailiure(error));
      });
  };
}


export default followUser;
export { getfollowers };
export { getfollowing };
