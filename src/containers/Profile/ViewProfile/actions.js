import { VIEW_PROFILE_REQUEST, VIEW_PROFILE_FAILURE,
    VIEW_PROFILE_SUCCESS } from './ActionTypes';
import axios from 'axios';

export const fetchUserProfile = () => ({
    type: VIEW_PROFILE_REQUEST,
});

export const fetchUserProfileSuccess = (payload) => ({
    type: VIEW_PROFILE_SUCCESS,
    payload:payload,
});

export const fetchUserProfileFailure = (errors) => ({
    type: VIEW_PROFILE_FAILURE,
    errors,
});

//fetch user details
const fetchUserDetails  = (username) => {
    let url = `https://ah-leagueoflegends-staging.herokuapp.com/api/profiles/${username}`;
    return (dispatch) => {
        dispatch(fetchUserProfile());
        return axios.get(url).then(
            (response) => {
                let userData = response.data;
                dispatch(fetchUserProfileSuccess(userData))
            },
            (errors) => {
                dispatch(fetchUserProfileFailure(errors))
            }
        )

    }
};

export default fetchUserDetails;
