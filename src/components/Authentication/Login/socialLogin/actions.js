import { LoginConstants } from './actiontypes';
let axios = require('axios');

const loginSuccess = (payload) => {
    return {
        type: LoginConstants.LOGIN_SUCCESS,
        payload
    }
}

const loginFailure =  (error) => {
    return {
        type: LoginConstants.LOGIN_FAILURE,
        error
    }
}

function socialLogin (provider, accessToken){
    return (dispatch) => {
        return axios.post('https://ah-leagueoflegends-staging.herokuapp.com/api/users/social_auth/',
            {'provider': provider, 'access_token': accessToken}, 
            {"headers":{"Content-Type": "application/json"}})
            .then(response => {
                dispatch(loginSuccess(response.data))
                const { token } = response.data.user
                localStorage.setItem('access_token', token)
            })
            .catch(error => {
                dispatch(loginFailure(error))
            })
    }
}

export default socialLogin;