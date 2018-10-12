import {
    UPDATE_USER_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILURE, CLEAR_STORE,
} from './ActionTypes';

const InitialState = {
    payload: {},
    success: false,
    failure: false,
    errors: null,
    isFetching: false,
};

const editProfileReducer = (state = InitialState, action) => {
    const {type, payload, errors} = action;
    switch(type) {
        case UPDATE_USER_PROFILE_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case UPDATE_PROFILE_FAILURE:
            return {
                ...state,
                isFetching: false,
                failure: true,
                success: false,
                errors,
            };
        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                success: true,
                failure: false,
                errors: null,
                payload,
            };
        case CLEAR_STORE:
            return {
                ...state,
                errors: {},
                isFetching: false,
                success: false,
            };
        default:
            return state;
    }
};

export default editProfileReducer;
