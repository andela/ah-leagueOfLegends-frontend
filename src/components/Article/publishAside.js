import React from 'react';

const publishAside = props => (
  <div className="col s12 m1">
    <div>
      <button type="button" className="dropdown-trigger btn-dropdown" data-target="publish">
      Publish
      </button>

      <div id="publish" className="dropdown-content" style={{ marginTop: 100, position: 'absolute' }}>

        <div className="chips chips-placeholder" />

        <div className="divider" />
      </div>
    </div>
  </div>
);

export default publishAside;
