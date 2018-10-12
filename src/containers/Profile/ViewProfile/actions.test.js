import  * as actions from '../UpdateProfile/actions';
import {
    UPDATE_PROFILE_FAILURE,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_USER_PROFILE_REQUEST
} from "../UpdateProfile/ActionTypes";

describe('Actions for profile', () => {
  // Create update user profile request
  it('should do an update user profile request action', () => {
      const expectedAction = {
          type: UPDATE_USER_PROFILE_REQUEST,
      };
      expect(actions.updateUserProfile()).toEqual(expectedAction);
  });

  // Dispatch error when update user profile request fails
  it('should dispatch errors when the update user profile request fails', () => {
      const errors = {
          errors: {
              error: ['Profile failed to update'],
          },
      };
      const expectedAction = {
          type: UPDATE_PROFILE_FAILURE,
          errors,
      };
      expect(actions.updateUserProfileFailure(errors)).toEqual(expectedAction);
  });

  //Dispatch payload when the update user profile request is a success
  it('should dispatch the payload when the update user profile request is a success', () => {
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
            type: UPDATE_PROFILE_SUCCESS,
            payload,
        };
        expect(actions.updateUserProfileSuccess(payload)).toEqual(expectedAction);
    });

});
