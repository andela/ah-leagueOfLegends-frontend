import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (localStorage.getItem('access_token') ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    ))
    }
  />
);

PrivateRoute.propTypes = {
  location: PropTypes.instanceOf(Object),
  component: PropTypes.func.isRequired,
};

PrivateRoute.defaultProps = { location: null };

export default PrivateRoute;
