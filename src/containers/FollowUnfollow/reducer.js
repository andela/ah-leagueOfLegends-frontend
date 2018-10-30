const initialState = {
  isfollowing: '',
  error: '',
  success: false,
  following: [],
  followers: [],
};

export default function followReducer(state = initialState, action) {
  switch (action.type) {
    case 'FOLLOW_SUCCESSFUL':
      return {
        ...state,
        isfollowing: action.payload.profile.following,
        success: true,
      };
    case 'FOLLOW_UNSUCCESSFUL':
      return {
        ...state,
        error: followReducer.error,
        success: false,
      };
    case 'GET_FOLLOWERS_SUCCESSFUL':
      return {
        ...state,
        followers: action.payload.profile.followers,
        success: true,
      };
    case 'GET_FOLLOWING_SUCCESSFUL':
      return {
        ...state,
        followers: action.payload.profile.followers,
        success: true,
      };
    case 'GET_USERS_UNSUCCESFUL':
      return {
        ...state,
        error: followReducer.error,
        success: false,
      };
    default:
      return state;
  }
}
