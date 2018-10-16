import React from 'react';

const notFound = () => <div><h1>NOT FOUND</h1></div>;

export default notFound;
import PropTypes from 'prop-types';
import ViewProfile from '../ViewProfiles';

const NotFound = ({ item }) => (
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

ViewProfile.propTypes = { item: PropTypes.string.isRequired };

export default NotFound;
