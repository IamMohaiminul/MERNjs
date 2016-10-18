'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

class RoleListComponent extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <h3 className='text-center'>Role List Component</h3>
          {JSON.parse(localStorage.getItem('permission'))
            &&JSON.parse(localStorage.getItem('permission')).role
            && JSON.parse(localStorage.getItem('permission')).role.create
            ? <Link to='/roles/create' className='btn btn-default'>Create Role</Link>
            : null
          }
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>SN</th>
                <th>Name</th>
                <th>Hierarchy</th>
                <th>Permission</th>
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
    return this.props.allRole.map((role) => {
      return (
        <tr key={role._id}>
          <td>{sN++}</td>
          <td>{role.name ? role.name : '---'}</td>
          <td>{role.hierarchy ? role.hierarchy : '---'}</td>
          <td>{role.permission ? JSON.stringify(role.permission) : '---'}</td>
        </tr>
      );
    });
  }
}

export default RoleListComponent;
