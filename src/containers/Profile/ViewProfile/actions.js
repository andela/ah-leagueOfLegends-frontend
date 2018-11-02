import axios from 'axios';
import {
  VIEW_PROFILE_REQUEST, VIEW_PROFILE_FAILURE,
  VIEW_PROFILE_SUCCESS, VIEW_LOGGED_IN_PROFILE_SUCCESS,
  VIEW_PROFILE_FOLLOW_SUCCESSFUL,
} from './ActionTypes';
import { BACKEND_URL } from '../../../utils/config';

export const fetchUserProfile = () => ({ type: VIEW_PROFILE_REQUEST });

export const fetchUserProfileSuccess = payload => ({
  type: VIEW_PROFILE_SUCCESS,
  payload,
});

export const fetchloggedINUserProfileSuccess = payload => ({
  type: VIEW_LOGGED_IN_PROFILE_SUCCESS,
  payload,
});

export const fetchUserProfileFailure = errors => ({
  type: VIEW_PROFILE_FAILURE,
  errors,
});
export const viewProfileFollowSuccess = payload => ({
  type: VIEW_PROFILE_FOLLOW_SUCCESSFUL,
  payload,
});

// fetch user details
const fetchUserDetails = (username, type = null) => {
  const accessToken = localStorage.getItem('access_token');
  const url = `${BACKEND_URL}api/profiles/${username}`;
  return (dispatch) => {
    dispatch(fetchUserProfile());
    return axios.get(url, { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` } }).then(
      (response) => {
        const userData = response.data;
        if (type === 'loggedInUser') {
          dispatch(fetchloggedINUserProfileSuccess(userData));
        } else {
          dispatch(fetchUserProfileSuccess(userData));
        }
      },
      (errors) => {
        dispatch(fetchUserProfileFailure(errors));
      },
    );
  };
};

export default fetchUserDetails;
