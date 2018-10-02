import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import Signup from '../containers/Authentication/Signup/reducer';
import Signin from '../containers/Authentication/Login/reducer';

export default combineReducers({
  Signup,
  Signin,
  router: routerReducer,
});
