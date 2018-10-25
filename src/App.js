import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Router } from 'react-router-dom';

import store from './store/store';
import ROUTE from './utils/routes';
import Articles from './containers/Articles/Read';
import Success from './components/Authentication/Signup/Success';
import NewArticle from './containers/Articles/Create';
import MainArticle from './containers/Articles/Article/largArticle';
import UpdateArticle from './containers/Articles/Update/index';
import NotFound from './components/NotFound';
import PrivateRoute from './utils/PrivateRoute';
import Rating from './components/Rating/Rating';
import Navbar from './components/Navbar';
import SearchResults from './containers/Search/index.';
import history from './history';
import PasswordReset from './containers/Resetpassword/index';
import ViewProfile from './containers/Profile/ViewProfile/index';
import UpdateProfile from './containers/Profile/UpdateProfile/index';

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Navbar />
            <Switch>
              <Route exact path={ROUTE.home} component={Articles} />
              <Route exact path="/Success" component={Success} />
              <Route exact path="/rating" component={Rating} />
              <Route exact path={ROUTE.searchResults} component={SearchResults} />
              <Route exact path={ROUTE.reset} component={PasswordReset} />
              <Route exact path={ROUTE.getUserProfile} component={ViewProfile} />

              <PrivateRoute exact path={ROUTE.updateUserProfile} component={UpdateProfile} />

              <PrivateRoute exact path={ROUTE.newArticle} component={NewArticle} />
              <Route exact path={ROUTE.article} component={MainArticle} />
              <PrivateRoute exact path={ROUTE.editArticle} component={UpdateArticle} />
              <Route path={ROUTE.notFound} component={NotFound} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
