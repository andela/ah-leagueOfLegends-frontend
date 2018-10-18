import axios from 'axios';
import {
  VIEW_PROFILE_REQUEST, VIEW_PROFILE_FAILURE,
  VIEW_PROFILE_SUCCESS,
} from './ActionTypes';
import { BACKEND_URL } from '../../../utils/config';

export const fetchUserProfile = () => ({ type: VIEW_PROFILE_REQUEST });

export const fetchUserProfileSuccess = payload => ({
  type: VIEW_PROFILE_SUCCESS,
  payload,
});

export const fetchUserProfileFailure = errors => ({
  type: VIEW_PROFILE_FAILURE,
  errors,
});

// fetch user details
const fetchUserDetails = (username) => {
  const url = `${BACKEND_URL}api/profiles/${username}`;
  return (dispatch) => {
    dispatch(fetchUserProfile());
    return axios.get(url).then(
      (response) => {
        const userData = response.data;
        dispatch(fetchUserProfileSuccess(userData));
      },
      (errors) => {
        dispatch(fetchUserProfileFailure(errors));
      },
    );
  };
};

export default fetchUserDetails;
