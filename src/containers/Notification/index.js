import React, { Component } from 'react';
import M from 'materialize-css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getNotifications, { getSingleNotifications } from './action';

class Notifications extends Component {
  componentDidMount() {
    const { InAppNotifications } = this.props;
    InAppNotifications();
    const el = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(el);
  }

  renderCount = () => {
    const { notifystate } = this.props;

    if (notifystate.success && notifystate.notifications.notifications) {
      let count = 0;
      notifystate.notifications.notifications.map((notification) => {
        if (notification.unread === true) {
          count += 1;
        }
        return count;
      },
      );

      if (count !== 0) {
        return (
          <div id="notification-counter">
            <span>
              {count}
            </span>
          </div>
        );
      }
      return null;
    }
    return null;
  }

  readNotification = (e) => {
    const id = e.target.getAttribute('data-id');
    const { markNotification } = this.props;
    markNotification(id);
  }

  renderNotifications = () => {
    const { notifystate } = this.props;
    if (notifystate.success && notifystate.notifications.notifications) {
      return (
        notifystate.notifications.notifications.map(notification => (
          <li key={notification.id} className="notification">
            <div className={notification.unread ? 'unread' : 'read'}>

              <img
                className="notification-avatar"
                alt="profile-pic"
                data-id={notification.id}
                src={notification.actor.image}
              />

              <div className="actor" data-id={notification.id}>
                {`${notification.actor.username}  ${notification.verb}`}
              </div>

              <Link
                className="notification-descripton"
                to={`/article/${
                  (notification.action_object === null) ? null
                    : notification.action_object.slug}`}
                onClick={this.readNotification}
                data-id={(notification.id === null) ? null
                  : notification.id}
              >
                {(notification.action_object === null) ? null
                  : notification.action_object.title}
              </Link>

              <div className="time">
                {`${notification.timesince} ago`}
              </div>
            </div>
          </li>
        ))
      );
    }

    return <li className="zero-notification">You have no new notifications</li>;
  }

  render() {
    return (
      <div>
        {this.renderCount()}
        <div />
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

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    InAppNotifications: getNotifications,
    markNotification: getSingleNotifications,
  },
  dispatch);

export default connect(
  mapStateToProps, mapDispatchToProps,
)(Notifications);
