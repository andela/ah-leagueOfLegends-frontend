import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import store from './store/store';
import ROUTE from './utils/routes';
import Articles from './containers/Articles/Read';
// import Navbar from './components/Authentication/Navbar';
import Register from './components/Authentication/Signup/Register';


import Login from './containers/Authentication/Login/Login';
import Navbar from './components/Navbar';


class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Register />
            <Navbar />
            <Login />
            <Switch>
              <Route exact path={ROUTE.home} component={Articles} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
