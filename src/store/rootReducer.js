import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import articles from '../containers/Articles/Read/reducer';


export default combineReducers({
  articles,
  router: routerReducer,
});
