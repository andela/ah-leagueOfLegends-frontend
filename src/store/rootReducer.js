import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginReducer from '../containers/Authentication/Login/reducer';
import forgotPasswordReducer from '../containers/Forgotpassword/reducer';
import resetPasswordReducer from '../containers/Resetpassword/reducer';

import articles from '../containers/Articles/Read/reducer';
import popularArticles from '../containers/Articles/Read/popular/reducer';
import authReducer from '../components/Authentication/Signup/reducers/authReducer';
import newArticle from '../containers/Articles/Create/reducer';
import completeArticle from '../containers/Articles/Article/reducer';
import ratingReducer from '../components/Rating/reducers/ratingReducer';
import searchReducer from '../containers/Search/reducer';
import commentReducer from '../containers/comments/reducer';
import getAllComment from '../containers/comments/getComents/reducer';

import { SocialLoginReducer } from '../components/Authentication/Login/socialLogin/reducer';
import NotificationReducer from '../containers/Notification/reducer';
import viewProfileReducer from '../containers/Profile/ViewProfile/reducer';
import editProfileReducer from '../containers/Profile/UpdateProfile/reducer';
import likeDislikeCommentReducer from '../containers/LikeDislikeComments/reducer';
import followReducer from '../containers/FollowUnfollow/reducer';

import toggleNotificationReducer from '../containers/ToggleNotifications/reducer';

export default combineReducers({
  completeArticle,
  articles,
  popularArticles,
  authReducer,
  ratingReducer,
  newArticle,
  commentReducer,
  getAllComment,
  router: routerReducer,
  Login: loginReducer,
  socialLoginReducer: SocialLoginReducer,
  Search: searchReducer,
  forgotPasswordReducer,
  resetPasswordReducer,
  NotificationReducer,
  editProfileReducer,
  viewProfileReducer,
  toggleNotificationReducer,
  likeDislikeCommentReducer,
  followReducer,
});
