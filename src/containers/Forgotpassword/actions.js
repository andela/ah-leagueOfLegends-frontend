import axios from 'axios';

export const LINK_REQUEST = 'LINK_REQUEST';
export const LINK_SUCCESS = 'LINK_SUCCESS';
export const LINK_FAILURE = 'LINK_FAILURE';

export const linkSuccess = payload => ({
  type: LINK_SUCCESS,
  payload: { payload },
});

export const linkFailure = errors => ({
  type: LINK_FAILURE,
  errors: { errors },
});

export const forgotPassword = () => ({ type: LINK_REQUEST });

export const forgotPasswordAction = email => (dispatch) => {
  axios.post('https://ah-leagueoflegends-staging.herokuapp.com/api/users/forgot_password/',
    { email },
  )
    .then((res) => {
      dispatch(linkSuccess(res.data));
      console.log(res.data);
    }).catch((err) => {
      dispatch(linkFailure(err));
    },
    );
};

export default forgotPasswordAction;
