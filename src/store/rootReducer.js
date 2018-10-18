import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginReducer from '../containers/Authentication/Login/reducer';

import articles from '../containers/Articles/Read/reducer';
import authReducer from '../components/Authentication/Signup/reducers/authReducer';
import newArticle from '../containers/Articles/Create/reducer';
import completeArticle from '../containers/Articles/Article/reducer';
import ratingReducer from '../components/Rating/reducers/ratingReducer';

import { SocialLoginReducer } from '../components/Authentication/Login/socialLogin/reducer';

export default combineReducers({
  completeArticle,
  articles,
  authReducer,
  ratingReducer,
  newArticle,
  router: routerReducer,
  Login: loginReducer,
  socialLoginReducer: SocialLoginReducer,
});
