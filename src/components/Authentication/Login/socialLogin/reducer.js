export const initialState = { isAuthenticated: localStorage.getItem('isAuthenticated') || false };

export const SocialLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USERS_LOGIN_SUCCESS':
      localStorage.setItem('isAuthenticated', true);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case 'USERS_LOGIN_FAILURE':
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
