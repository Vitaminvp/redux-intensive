// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Transition } from 'react-transition-group';
import gsap from 'gsap';
import cx from 'classnames';
// Instruments
import Styles from './styles.m.css';
import { notificationActions } from '../../bus/notification/action';

const mapStateToProps = ({ notifications }) => ({
  notifications,
});

@connect(
  mapStateToProps,
  notificationActions
)
export class Notification extends Component {
  _hideNotification = notification => () => {
    const { hideNotification } = this.props;
    hideNotification(notification.get('id'));
  };

  _handleNotificationAppear = postman => {
    gsap.fromTo(postman, 0.5, { opacity: 0 }, { opacity: 1 });
  };

  _handleNotificationDisappear = notification => postman => {
    const { hideNotification } = this.props;

    gsap.fromTo(
      postman,
      0.5,
      { opacity: 1 },
      {
        opacity: 0,
        onComplete: () => {
          hideNotification(notification.get('id'));
        },
      }
    );
  };

  _getComputedMessage = notification => {
    const type = notification.get('type');
    const message = notification.get('message');
    const source = notification.get('source');

    if (type === 'error') {
      return (
        <span>
          <span>Error in {source}:</span>
          <span>{message}</span>
        </span>
      );
    }

    return <span>✓ {message}</span>;
  };

  _getNotificationStyles = notification => {
    const type = notification.get('type');

    return cx(Styles.notification, {
      [Styles.info]: type === 'info',
    });
  };

  render() {
    const { notifications } = this.props;

    const computedMessage = notification =>
      this._getComputedMessage(notification);
    const notificationStyles = notification =>
      this._getNotificationStyles(notification);

    return (
      <div className={Styles.notifications}>
        {notifications.map(notification => (
          <Transition
            appear
            in={true}
            timeout={5000}
            onClick={this._hideNotification(notification)}
            onEnter={this._handleNotificationAppear}
            onEntered={this._handleNotificationDisappear(notification)}
            onExit={this._handleNotificationDisappear(notification)}
            key={notification.get('id')}
          >
            <div className={notificationStyles(notification)}>
              {computedMessage(notification)}
            </div>
          </Transition>
        ))}
      </div>
    );
  }
}
