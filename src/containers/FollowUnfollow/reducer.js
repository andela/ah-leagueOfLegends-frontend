const initialState = {
  isfollowing: '',
  error: '',
  success: false,
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
    default:
      return state;
  }
}
