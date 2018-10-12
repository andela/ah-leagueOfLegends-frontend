import React from 'react';
import { Provider } from 'react-redux';
import {
    Switch, Route, BrowserRouter as Router,
} from 'react-router-dom';

import store from './store/store';
import ROUTES from './utils/routes';
import Home from './containers/Home';

import ViewProfile from "./containers/Profile/ViewProfile/index";
import UpdateProfile from "./containers/Profile/UpdateProfile/index";

export default () => (
    <Provider store={store}>
        <Router>
                <Switch>
                    <Route exact path={ROUTES.home} component={Home} />

                    <Route exact path={ROUTES.getUserProfile} component={ViewProfile} />

                    <Route exact path={ROUTES.updateUserProfile} component={UpdateProfile} />
                </Switch>
        </Router>
    </Provider>
);
