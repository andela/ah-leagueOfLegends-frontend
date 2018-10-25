import * as actions from './actions';
import viewProfileReducer from './reducer';

describe('Profile reducers', () => {
  // VIEW_PROFILE_REQUEST
  it('should set isFetching to true and return 5 objects', () => {
    const initialState = {
      payload: {},
      success: false,
      failure: false,
      errors: null,
      isFetching: false,
    };
    const action = actions.fetchUserProfile();

    const newState = viewProfileReducer(initialState, action);
    // tests the number of objects returned == 5
    expect(Object.keys(newState).length).toEqual(5);
    // test if isFetching: true,
    expect(newState.isFetching).toBe(true);
  });

  // VIEW_PROFILE_FAILURE
  it('should return 5 objects and set failure to true', () => {
    const initialState = {
      payload: {},
      errors: null,
      success: false,
      failure: false,
      isFetching: false,
    };
    const errors = { errors: { error: ['The requested profile does not exist.'] } };
    const action = actions.fetchUserProfileFailure(errors);

    const newState = viewProfileReducer(initialState, action);
    // tests the number of objects returned == 5
    expect(Object.keys(newState).length).toEqual(5);
    // test if isFetching: false,
    expect(newState.isFetching).toBe(false);
    // test if failure: true,
    expect(newState.failure).toBe(true);
    // test if success: false,
    expect(newState.success).toBe(false);
  });

  // VIEW_PROFILE_SUCCESS:
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
        username: 'Takeda',
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

    const action = actions.fetchUserProfileSuccess(payload);

    const newState = viewProfileReducer(initialState, action);

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
