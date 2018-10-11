import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginReducer from '../containers/Authentication/Login/reducer';

import articles from '../containers/Articles/Read/reducer';
import authReducer from '../components/Authentication/Signup/reducers/authReducer';
import newArticle from '../containers/Articles/Create/reducer';


export default combineReducers({
  articles,
  authReducer,
  articles,
  newArticle,
  router: routerReducer,
  Login: loginReducer,
});
