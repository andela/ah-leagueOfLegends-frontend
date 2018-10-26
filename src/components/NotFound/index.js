import React from 'react';
import PropTypes from 'prop-types';
import ViewProfile from '../ViewProfile';

const NotFound = item => (
  <main className="conatiner">
    <div className="row">
      <div className="col m5 s12 offset-m4 profile">
        <div className="user-info">
          <h1>
            {item}
            {' '}
            Not Found
          </h1>
        </div>
      </div>
    </div>
  </main>
);

ViewProfile.PropTypes = { item: PropTypes.string.isRequired };

export default NotFound;
