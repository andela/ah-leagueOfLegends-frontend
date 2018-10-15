import * as actions from './actions';
import editProfileReducer from './reducer';

describe('Edit profile reducers', () => {
  // UPDATE_USER_PROFILE_REQUEST
  it('should set isFetching to true and return 5 objects', () => {
    const initialState = {
      payload: {},
      success: false,
      failure: false,
      errors: null,
      isFetching: false,
    };
    const action = actions.updateUserProfile();

    const newState = editProfileReducer(initialState, action);
    // tests the number of objects returned == 5
    expect(Object.keys(newState).length).toEqual(5);
    // test if isFetching: true,
    expect(newState.isFetching).toBe(true);
  });

  // UPDATE_PROFILE_FAILURE:
  it('should return 5 objects and set failure to true', () => {
    const initialState = {
      payload: {},
      errors: null,
      success: false,
      failure: false,
      isFetching: false,
    };
    const errors = { errors: { error: ['The profile has not been updated.'] } };
    const action = actions.updateUserProfileFailure(errors);

    const newState = editProfileReducer(initialState, action);
    // tests the number of objects returned == 5
    expect(Object.keys(newState).length).toEqual(5);
    // test if isFetching: false,
    expect(newState.isFetching).toBe(false);
    // test if failure: true,
    expect(newState.failure).toBe(true);
    // test if success: false,
    expect(newState.success).toBe(false);
  });

  // UPDATE_PROFILE_SUCCESS:
  it('should set success to true', () => {
    const initialState = {
      payload: {},
      errors: null,
      success: false,
      failure: false,
      isFetching: false,
    };
    const payload = {
      profile: {
        username: 'Takedah',
        bio: '',
        image: 'https://api.adorable.io/avatars/500/49991232',
        date_joined: '2018-09-21 12:06:41.129807+00:00',
        following: false,
        bookmarks: [
          'Ants are cool',
          'Gone Girl',
        ],
      },
    };

    const action = actions.updateUserProfileSuccess(payload);

    const newState = editProfileReducer(initialState, action);

    // tests the number of objects returned == 5
    expect(Object.keys(newState).length).toEqual(5);
    // test if isFetching: false,
    expect(newState.isFetching).toBe(false);
    // test if failure: false,
    expect(newState.failure).toBe(false);
    // test if success: true,
    expect(newState.success).toBe(true);
  });
});
