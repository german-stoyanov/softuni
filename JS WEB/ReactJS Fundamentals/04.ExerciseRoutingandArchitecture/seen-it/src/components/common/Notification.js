import React, { Component } from 'react';

import observerService from '../../infrastructure/observerService';

class Notification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: null,
      success: null,
      error: null,
      loading: null
    };

    this.hideNotification = this.hideNotification.bind(this);

    observerService.subscribe(
      observerService.events.notification,
      this.showNotification.bind(this)
    );
  }

  showNotification(data) {
    let message = data.message;
    let type = data.type;

    this.setState({
      [type]: true,
      message: message
    });
  }

  hideNotification(e) {
    e.preventDefault();
    this.setState({
      message: null,
      success: null,
      error: null,
      loading: null
    });
  }

  render() {
    let notificationId;

    if (this.state.success) {
      notificationId = 'infoBox';
    } else if (this.state.error) {
      notificationId = 'errorBox';
    } else if (this.state.loading) {
      notificationId = 'loadingBox';
    }

    if (this.state.message) {
      return (
        <div id="notifications" onClick={this.hideNotification}>
          <div id={notificationId} className="notification">
            <span>{this.state.message}</span>
          </div>
        </div>
      );
    }

    return null;
  }
}

export default Notification;