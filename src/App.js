import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Router } from 'react-router-dom';

import store from './store/store';
import ROUTE from './utils/routes';
import Articles from './containers/Articles/Read';
import Navbar from './components/Navbar';
import Register from './components/Authentication/Signup/Register';
import Success from './components/Authentication/Signup/Success';
import NewArticle from './containers/Articles/Create';
import MainArticle from './containers/Articles/Article/largArticle';
import UpdateArticle from './containers/Articles/Update/index';

import Login from './containers/Authentication/Login/Login';
import history from './history';

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Navbar />
            <Register />
            <Login />
            <Switch>
              <Route exact path={ROUTE.home} component={Articles} />
              <Route exact path="/Success" component={Success} />
              <Route exact path={ROUTE.newArticle} component={NewArticle} />
              <Route exact path={ROUTE.article} component={MainArticle} />
              <Route exact path={ROUTE.editArticle} component={UpdateArticle} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
