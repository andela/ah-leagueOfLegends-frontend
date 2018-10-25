import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import store from './store/store';
import ROUTES from './utils/routes';
import Articles from './containers/Articles/Read';
import Success from './components/Authentication/Signup/Success';
import NewArticle from './containers/Articles/Create';
import MainArticle from './containers/Articles/Article/largArticle';
import UpdateArticle from './containers/Articles/Update/index';
import PrivateRoute from './utils/PrivateRoute';

import ViewProfile from './containers/Profile/ViewProfile/index';
import UpdateProfile from './containers/Profile/UpdateProfile/index';

export default () => (
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route exact path={ROUTES.home} component={Articles} />

          <Route exact path={ROUTES.success} component={Success} />

          <Route exact path={ROUTES.getUserProfile} component={ViewProfile} />

          <PrivateRoute exact path={ROUTES.updateUserProfile} component={UpdateProfile} />

          <PrivateRoute exact path={ROUTES.newArticle} component={NewArticle} />

          <Route exact path={ROUTES.article} component={MainArticle} />

          <PrivateRoute exact path={ROUTES.editArticle} component={UpdateArticle} />
        </Switch>
      </div>
    </Router>
  </Provider>
);
