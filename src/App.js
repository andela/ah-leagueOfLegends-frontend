import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import store from './store/store';
import ROUTE from './utils/routes';
import Articles from './containers/Articles/Read';
import Success from './components/Authentication/Signup/Success';
import NewArticle from './containers/Articles/Create';
import MainArticle from './containers/Articles/Article/largArticle';
import UpdateArticle from './containers/Articles/Update/index';
import PrivateRoute from './utils/PrivateRoute';

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route exact path={ROUTE.home} component={Articles} />
              <Route exact path="/Success" component={Success} />

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
