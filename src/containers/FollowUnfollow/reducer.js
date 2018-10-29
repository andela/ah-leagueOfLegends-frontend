const initialState = {
  isfollowing: '',
  error: '',
  success: false,
};

export default function followReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_FOLLOWING_STATUS_SUCCESSFUL':
      return {
        ...state,
        isfollowing: action.payload.profile.following,
        success: true,
      };

    case 'GET_FOLLOWING_STATUS_UNSUCCESSFUL':
      return {
        ...state,
        error: followReducer.error,
        success: false,
      };
    default:
      return state;
  }
}
