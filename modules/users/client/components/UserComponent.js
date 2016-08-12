// Import Styles
import './UserComponent.scss';

import React, { Component } from 'react';

import UserCreateContainer from '../containers/UserCreateContainer';
import UserListContainer from '../containers/UserListContainer';
import UserDetailContainer from '../containers/UserDetailContainer';
import EditUserContainer from '../containers/EditUserContainer';

class UserComponent extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <h1 className='text-center'>Users Component</h1>
          <div className='row'>
            <div className='col-xs-4'>
              <UserCreateContainer />
            </div>
            <div className='col-xs-4'>
              <UserDetailContainer />
            </div>
            <div className='col-xs-4'>
              <EditUserContainer />
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12'>
              <UserListContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserComponent;
