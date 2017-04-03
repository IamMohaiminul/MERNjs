import React, { Component } from 'react';
import moment from 'moment';
import toastr from 'toastr';

class UserComponent extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-xs-12 text-center'>
          <div className='table-responsive'>
            <table className='table table-bordered table-striped table-hover'>
              <thead>
                <tr>
                  <td>SL</td>
                  <td>Full Name</td>
                  <td>Email Address</td>
                  <td>Status</td>
                  <td>Created At</td>
                  <td>Updated At</td>
                </tr>
              </thead>
              <tbody>
                {this.renderAllUser()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  renderAllUser() {
    if (this.props.allUser.length) {
      return this.props.allUser.map(function (user, index) {
        return (
          <tr key={user._id}>
            <td>{index + 1}</td>
            <td>{user.fullName}</td>
            <td>{user.emailAddress}</td>
            <td>{user.status}</td>
            <td>{moment(user.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
            <td>{moment(user.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
          </tr>
        );
      });
    } else {
      return null;
    }
  }

}

export default UserComponent;
