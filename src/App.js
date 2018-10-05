import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  NavLink, Switch, Route, BrowserRouter as Router,
} from 'react-router-dom';


import store from './store/store';
import Home from './containers/Home';
import Login from './containers/Authentication/Login/Login';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <h2>Welcome to Authors Haven</h2>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}


export default App;
