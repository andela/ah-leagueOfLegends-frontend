import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  Switch, Route, BrowserRouter as Router,
} from 'react-router-dom';


import store from './store/store';
import ROUTE from './utils/routes';
import Articles from './containers/Articles/Read';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
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
