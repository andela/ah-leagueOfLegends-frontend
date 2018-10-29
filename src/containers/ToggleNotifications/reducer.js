const initialState = {
  message: '',
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUBSCRIBE SUCCESSFUL':
      return {
        ...state,
        message: action.payload.message,
      };
    case 'UNSUBSCRIBE SUCCESSFUL':
      return {
        ...state,
        message: action.payload.message,
      };
    case 'UNSUBSCRIBE FAILURE':
      return {
        ...state,
        error: action.errors,
      };
    case 'SUBSCRIBE FAILURE':
      return {
        ...state,
        error: action.errors,
      };
    default:
      return { ...state };
  }
};
