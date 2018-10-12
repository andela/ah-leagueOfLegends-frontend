import * as actions from './actions';
import {} from "./ActionTypes";
import { UPDATE_USER_PROFILE_REQUEST } from "./ActionTypes";
import { VIEW_PROFILE_FAILURE } from "../ViewProfile/ActionTypes";
import { UPDATE_PROFILE_SUCCESS } from "./ActionTypes";
import { UPDATE_PROFILE_FAILURE } from "./ActionTypes";

describe('Actions for edit profile', () => {
    // Create edit profile request
    it('should do an update user profile request action', () => {
        const expectedAction = {
            type: UPDATE_USER_PROFILE_REQUEST,
        };
        expect(actions.updateUserProfile()).toEqual(expectedAction);
    });

    // Dispatch error when update user request fails
    it('should dispatch errors when the update request fails', () => {
        const errors = {
            errors: {
                error: ['Profile not updated.'],
            },
        };
        const expectedAction = {
            type: UPDATE_PROFILE_FAILURE,
            errors,
        };
        expect(actions.updateUserProfileFailure(errors)).toEqual(expectedAction);
    });

    //Dispatch payload when the update user request is a success
    it('should dispatch the payload when the update user request is a success', () => {
        const payload = {
            "profile": {
                "username": "Takedah",
                "bio": "",
                "image": "https://api.adorable.io/avatars/500/49991232",
                "date_joined": "2018-09-21 12:06:41.129807+00:00",
                "following": false,
                "bookmarks": [
                    "Ants are cool",
                    "Gone Girl"
                ]
            }
        };
        const expectedAction = {
            type: UPDATE_PROFILE_SUCCESS,
            payload,
        };
        expect(actions.updateUserProfileSuccess(payload)).toEqual(expectedAction);
    });

});

