import { USER_SIGNUP } from './actions';

const initialState = {
  message: {},
};


export default (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};
