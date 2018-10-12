import {
    UPDATE_USER_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILURE, CLEAR_STORE
} from './ActionTypes';

import axios from 'axios';

export const updateUserProfile = () => ({
    type: UPDATE_USER_PROFILE_REQUEST,
});

export const updateUserProfileSuccess = (payload) => ({
    type: UPDATE_PROFILE_SUCCESS,
    payload,
});

export const updateUserProfileFailure = (errors) => ({
    type: UPDATE_PROFILE_FAILURE,
    errors,
});

//update user details
const updateUser = (data, history) => {
    let url = `https://ah-leagueoflegends-staging.herokuapp.com/api/user/`;
    return (dispatch) => {
        dispatch(updateUserProfile());
        return axios.put(url).then(
            (response) => {
                let userArray = response.data;
                console.log(response.data);
                dispatch(updateUserProfileSuccess(userArray));
                dispatch({ type: CLEAR_STORE });
            },
            (errors) => {
                console.log(errors);
                dispatch(updateUserProfileFailure(errors));
                dispatch({ type: CLEAR_STORE });
            }
        )

    }
};

export default updateUser;
