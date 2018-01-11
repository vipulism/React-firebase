import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
 
class Notification extends React.Component {
  createNotification = (type) => {
    return (event) => {
    event.preventDefault();
      switch (type) {
        case 'info':
          NotificationManager.info('+91 9899191885 is calling');
          break;
        case 'success':
          NotificationManager.success('Success message', 'Title here');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };
 
  render() {
    return (
      <div>
        <button className="btn btn-primary next"
          onClick={this.createNotification('info')}>Notify
        </button>
        <hr/>
        <NotificationContainer/>
      </div>
    );
  }
}
 
export default Notification;