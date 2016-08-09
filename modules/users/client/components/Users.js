import React, { Component } from 'react';

import UserList from '../containers/UserList';
import CreateUser from '../containers/CreateUser';
import UserDetail from '../containers/UserDetail';
import EditUser from '../containers/EditUser';

class Users extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Users Component...");
  }

  render() {
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <h1 className='text-center'>Users Component</h1>
          <div className='row'>
            <div className='col-xs-4'>
              <CreateUser />
            </div>
            <div className='col-xs-4'>
              <UserDetail />
            </div>
            <div className='col-xs-4'>
              <EditUser />
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12'>
              <UserList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
