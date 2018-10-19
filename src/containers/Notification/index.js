import React, { Component } from 'react';
import M from 'materialize-css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getNotifications from './action';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
      notificationBadge: false,
    };
  }

  componentDidMount() {
    const { InAppNotifications } = this.props;
    InAppNotifications();
    const el = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(el);
  }

  renderNotifications = () => {
    const { notifystate } = this.props;
    if (notifystate.success && notifystate.notifications.notifications) {
      try {
        return (
          notifystate.notifications.notifications.map(notification => (
            <li key={notification.id}>
              <img
                className="avatar-small"
                alt="profile-pic"
                src={notification.actor.image}
              />
              {notification.actor.username}
              {' '}
              {notification.verb}
              {' '}
              <div>
                {notification.timesince}
                {' '}
ago
              </div>
            </li>
          ))
        );
      } catch (e) {
        return ('could not get notifications', e);
      }
    } else {
      return <li> You dont have new notifications</li>;
    }
  }

  render() {
    return (
      <div>

        <div id="notification-counter">
          <span>3</span>
        </div>
        <i
          className="dropdown-trigger material-icons bell-dropdown"
          data-target="dropdown1"
        >
notifications_none
        </i>
        <ul id="dropdown1" className="dropdown-content ">
          {this.renderNotifications()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({ notifystate: state.NotificationReducer });

const mapDispatchToProps = dispatch => bindActionCreators({ InAppNotifications: getNotifications },
  dispatch);

export default connect(
  mapStateToProps, mapDispatchToProps,
)(Notifications);
