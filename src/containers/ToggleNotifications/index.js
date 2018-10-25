import React, { Component } from 'react';

class ToggleNotifications extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="switch">
        <label>
          Disable/Enable Notifications
          <input type="checkbox" />
          <span className="lever" />
        </label>
      </div>
    );
  }
}

export default ToggleNotifications;
