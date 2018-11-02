import axios from 'axios';

export const LINK_REQUEST = 'LINK_REQUEST';
export const LINK_SUCCESS = 'LINK_SUCCESS';
export const LINK_FAILURE = 'LINK_FAILURE';

export const linkSuccess = payload => ({
  type: LINK_SUCCESS,
  payload,
});

export const linkFailure = errors => ({
  type: LINK_FAILURE,
  errors,
});

export const forgotPassword = () => ({ type: LINK_REQUEST });

export const forgotPasswordAction = email => async (dispatch) => {
  try {
    const res = await axios.post('https://ah-leagueoflegends-staging.herokuapp.com/api/users/forgot_password/',
      { email },
    );
    dispatch(linkSuccess(res.data));
  } catch (err) {
    dispatch(linkFailure('oops! something went wrong :('));
  }
};

export default forgotPasswordAction;
