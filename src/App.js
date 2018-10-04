import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store/store';
import "./styles/styles.css"
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import Home from "./views/Home";
import Login from "./views/Login";

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
