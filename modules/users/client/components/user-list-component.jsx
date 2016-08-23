'use strict';

import React, { Component } from 'react';
import moment from 'moment';

class UserListComponent extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <h3 className='text-center'>User List Component</h3>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Password</th>
                <th>Created At</th>
                <th>Updated At</th>
              </tr>
            </thead>
            <tbody>
              {this.renderList()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  renderList() {
    return this.props.users.map(function (user) {
        return (
          <tr key={user._id} onClick={() => this.props.selectUser(user)}>
            <td>{user._id}</td>
            <td>{user.username}</td>
            <td>{user.password}</td>
            <td>{moment(user.createdAt).format('MMM Do YY, h:mm:ss a')}</td>
            <td>{moment(user.updatedAt).format('MMM Do YY, h:mm:ss a')}</td>
          </tr>
        );
      });
  }
}

export default UserListComponent;
