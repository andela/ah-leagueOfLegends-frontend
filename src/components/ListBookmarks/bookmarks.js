import React from 'react';
import PropTypes from 'prop-types';

const Bookmarks = ({ bookmarkList }) => (
  <div className="row">
    <div className="col s12 m6 offset-m3">
      <div className="card hoverable">
        <div className="card-content">
          <span className="bookmark-title">Article Title </span>
          <p>
            {bookmarkList}
          </p>
        </div>

      </div>
    </div>
  </div>
);

Bookmarks.propTypes = { bookmarkList: PropTypes.shape([]).isRequired };

export default Bookmarks;
