'use strict';

import React, { Component } from 'react';

import UserCreateContainer from '../containers/user-create-container.jsx';
import UserListContainer from '../containers/user-list-container.jsx';
import UserDetailContainer from '../containers/user-detail-container.jsx';
import UserEditContainer from '../containers/user-edit-container.jsx';

class UserComponent extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <h1 className='text-center'>Users Component</h1>
          <div className='row'>
            <div className='col-xs-4'>
              <UserCreateContainer/>
            </div>
            <div className='col-xs-4'>
              <UserDetailContainer/>
            </div>
            <div className='col-xs-4'>
              <UserEditContainer/>
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12'>
              <UserListContainer/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserComponent;
