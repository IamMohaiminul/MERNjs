'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

class UserListComponent extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <h3 className='text-center'>User List Component</h3>
          {JSON.parse(localStorage.getItem('permission'))
            && JSON.parse(localStorage.getItem('permission')).user
            && JSON.parse(localStorage.getItem('permission')).user.create
            ? <Link to='/users/create' className='btn btn-default'>Create User</Link>
            : null
          }
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>SN</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date of Birth</th>
                <th>Designation</th>
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
    let sN = 1;
    return this.props.allUser.map((user) => {
      return (
        <tr key={user._id}>
          <td>{sN++}</td>
          <td>{user.name ? user.name : '---'}</td>
          <td>{user.email ? user.email : '---'}</td>
          <td>{user.dateOfBirth ? moment(user.dateOfBirth).format('YYYY-MM-DD') : '---'}</td>
          <td>{user.role && user.role.name ? user.role.name : '---'}</td>
        </tr>
      );
    });
  }
}

export default UserListComponent;
