import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store/store';
import "./styles/styles.css"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          Welcome to Authors Haven

        </div>
      </Provider>
    );
  }
}

export default App;
