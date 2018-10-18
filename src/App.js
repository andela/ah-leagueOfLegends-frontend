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
import PrivateRoute from './utils/PrivateRoute';
import Rating from './components/Rating/Rating';
import Navbar from './components/Navbar';
import SearchResults from './containers/Search/index.';
import history from './History';

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

              <PrivateRoute exact path={ROUTE.newArticle} component={NewArticle} />
              <Route exact path={ROUTE.article} component={MainArticle} />
              <PrivateRoute exact path={ROUTE.editArticle} component={UpdateArticle} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
