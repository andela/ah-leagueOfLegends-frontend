import * as actions from './actions';
import {} from "./ActionTypes";

describe('Actions for edit profile', () => {
    // Create edit profile request
    it('should do a fetch user profile request action', () => {
        const expectedAction = {
            type: VIEW_PROFILE_REQUEST,
        };
        expect(actions.fetchUserProfile()).toEqual(expectedAction);
    });

    // Dispatch error when request fails
    it('should dispatch errors when the request fails', () => {
        const errors = {
            errors: {
                error: ['The requested profile does not exist.'],
            },
        };
        const expectedAction = {
            type: VIEW_PROFILE_FAILURE,
            errors,
        };
        expect(actions.fetchUserProfileFailure(errors)).toEqual(expectedAction);
    });

    //Dispatch payload when the request is a success
    it('should dispatch the payload when the request is a success', () => {
        const payload = {
            "profile": {
                "username": "Takeda",
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
            type: VIEW_PROFILE_SUCCESS,
            payload,
        };
        expect(actions.fetchUserProfileSuccess(payload)).toEqual(expectedAction);
    });

});

