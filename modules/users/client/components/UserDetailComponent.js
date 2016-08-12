// Import Styles
import './UserDetailComponent.scss';

import React, { Component } from 'react';
import moment from 'moment';

class UserDetailComponent extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <h3 className='text-center'>User Detail Component</h3>
          { this.props.user ?
            <div>
              <p>ID: {this.props.user._id}</p>
              <p>Username: {this.props.user.username}</p>
              <p>createdAt: {moment(this.props.user.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</p>
              <p>updatedAt: {moment(this.props.user.updatedAt).format("MMMM Do YYYY, h:mm:ss a")}</p>
            </div> : <p>Please select a user...</p>
          }
        </div>
      </div>
    );
  }
}

export default UserDetailComponent;
