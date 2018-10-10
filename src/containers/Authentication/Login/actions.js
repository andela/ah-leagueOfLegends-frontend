import { LoginConstants } from './actiontypes';
let axios = require('axios');

const loginRequest = () => {
    return {
        type: LoginConstants.LOGIN_REQUEST
    }
}

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

function login (email, password){
    return (dispatch) => {
        dispatch(loginRequest);
        return axios.post('https://ah-leagueoflegends-staging.herokuapp.com/api/users/login/',
            {'user': {"email": email, "password": password}}, 
            {"headers":{"Content-Type": "application/json"}})
            .then(response => {
                dispatch(loginSuccess(response.data))
                const { token } = response.data.user
                localStorage.setItem('access_token', token)
            })
            .catch(error => {
                dispatch(loginFailure(error.response.data.errors.error[0]))
                // console.log(error.response.data.errors.error[0])
            })
    }
}

export default login;


