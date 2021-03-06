const initialState = {
  notifications: [],
  error: '',
  success: false,
  message: false,
};

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_NOTIFICATIONS_SUCCESSFUL':
      return {
        ...state,
        notifications: action.payload,
        success: true,
      };
    case 'FETCH_NOTIFICATIONS_FAILED':
      return {
        ...state,
        error: notificationReducer.error,
        success: false,
      };
    case 'NOTIFICATION_READ':
      return {
        ...state,
        message: true,
      };
    default:
      return state;
  }
}
