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
const token = (window.location.href).split('/')[6];
console.log(window.location.href);
const url = `https://ah-leagueoflegends-staging.herokuapp.com/api/users/reset_password/${token}/`;
console.log(url);

export const resetPasswordAction = (email, newPassword, confirmPassword) => (dispatch) => {
  axios.put(url, { email, newPassword, confirmPassword },
  )
    .then((res) => {
      console.log('........', res.data);
      dispatch(linkSuccess(res));
    }).catch((err) => {
      console.log(err);
      dispatch(linkFailure(err));
    },
    );
};

export default resetPasswordAction;
