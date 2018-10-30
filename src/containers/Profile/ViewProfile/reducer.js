import {
  VIEW_PROFILE_REQUEST, VIEW_PROFILE_FAILURE,
  VIEW_PROFILE_SUCCESS, VIEW_LOGGED_IN_PROFILE_SUCCESS,
} from './ActionTypes';

const initialState = {
  isFetching: false,
  payload: {
    profile: {
      username: '',
      bio: '',
      image: '',
      following: '',
    },
  },
  loggedInUser: {
    profile: {
      username: '',
      bio: '',
      image: '',
    },
  },
  success: false,
  failure: false,
  errors: null,
};

const viewProfileReducer = (state = initialState, action) => {
  const { type, payload, errors } = action;
  switch (type) {
    case VIEW_PROFILE_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case VIEW_PROFILE_FAILURE:
      return {
        ...state,
        isFetching: false,
        failure: true,
        success: false,
        errors,
      };
    case VIEW_PROFILE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        failure: false,
        success: true,
        errors: null,
        payload,
      };
    case VIEW_LOGGED_IN_PROFILE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        failure: false,
        success: true,
        errors: null,
        loggedInUser: payload,
      };
    default:
      return state;
  }
};

export default viewProfileReducer;
