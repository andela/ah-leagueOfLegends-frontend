import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import store from './store/store';
import ROUTE from './utils/routes';
import Articles from './containers/Articles/Read';

// import Home from "./containers/Home";
import Login from './containers/Authentication/Login/Login';
import Register from './components/Authentication/Signup/Register';

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route exact path={ROUTE.home} component={Articles} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
