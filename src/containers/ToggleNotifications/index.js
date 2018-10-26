import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import subscribeNotification, { unSubscribeNotification } from './actions';

class ToggleNotifications extends Component {
  componentDidMount() {}

  onChange = (e) => {
    const toggler = e.target.checked;
    const { subscribe, unsubscribe } = this.props;
    if (toggler) {
      subscribe();
    } else {
      unsubscribe();
    }
  }

  render() {
    return (
      <div className="switch">
        <label>
          Disable/Enable Notifications
          <input type="checkbox" onChange={this.onChange} />
          <span className="lever" data-on="Yes" data-off="No" />
        </label>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    subscribe: subscribeNotification,
    unsubscribe: unSubscribeNotification,
  },
  dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ToggleNotifications);
