import axios from 'axios';
import {
  UPDATE_USER_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE, CLEAR_STORE,
} from './ActionTypes';


export const updateUserProfile = () => ({ type: UPDATE_USER_PROFILE_REQUEST });

export const updateUserProfileSuccess = payload => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload,
});

export const updateUserProfileFailure = errors => ({
  type: UPDATE_PROFILE_FAILURE,
  errors,
});

// update user details
const updateUser = (profile) => {
  const url = 'https://ah-leagueoflegends-staging.herokuapp.com/api/user/';
  return (dispatch) => {
    dispatch(updateUserProfile());
    return axios.put(url,
      profile,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization:
                'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTgsImV4cCI6MTU0MjIxMzc0MX0.RoqZTO7S4ySw1bOzzBtLuV4y6wB4ChQl4-oiqqYy6hM',
        },
      },
    ).then(
      (response) => {
        const userArray = response.data;
        dispatch(updateUserProfileSuccess(userArray));
        dispatch({ type: CLEAR_STORE });
      },
      (errors) => {
        dispatch(updateUserProfileFailure(errors));
        dispatch({ type: CLEAR_STORE });
      },
    );
  };
};

export default updateUser;
