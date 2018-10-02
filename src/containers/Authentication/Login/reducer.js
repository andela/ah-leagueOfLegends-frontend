import { USER_LOGIN } from './actions';

const initialState = {
  message: {},
};


export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};
