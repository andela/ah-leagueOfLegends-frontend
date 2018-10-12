import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import articles from '../containers/Articles/Read/reducer';
import authReducer from '../components/Authentication/Signup/reducers/authReducer';


export default combineReducers({
  articles,
  authReducer,
  router: routerReducer,
});
