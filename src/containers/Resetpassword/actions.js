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

export const resetPassword = () => ({ type: LINK_REQUEST });

export const resetPasswordAction = data => (dispatch) => {
  axios.post('https://ah-leagueoflegends-staging.herokuapp.com/api/users/reset_password/',
    { data },
  )
    .then((res) => {
      dispatch(linkSuccess(res));
    }).catch((err) => {
      dispatch(linkFailure(err));
    },
    );
};

export default resetPasswordAction;
