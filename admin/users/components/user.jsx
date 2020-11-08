import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class UserComponent extends Component {
  renderAllUser() {
    const { users } = this.props;
    if (users.length) {
      return users.map((user, idx) => {
        return (
          <tr key={idx.toString()}>
            <td>{idx + 1}</td>
            <td>{user.fullName}</td>
            <td>{user.emailAddress}</td>
            <td>{moment(user.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
            <td>{moment(user.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
            <td>
              {user.status.toLowerCase() === 'active' ? (
                <i className="fa fa-eye text-success" />
              ) : (
                <i className="fa fa-eye-slash text-danger" />
              )}
            </td>
          </tr>
        );
      });
    }
    return (
      <tr>
        <td colSpan="6" className="text-center">
          <h1 className="msg-h1">Currently, there is no user!</h1>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <div className="row">
        <table className="table table-hover">
          <thead>
            <tr className="table-active">
              <th scope="col">No</th>
              <th scope="col">Full Name</th>
              <th scope="col">Email Address</th>
              <th scope="col">Created At</th>
              <th scope="col">Update At</th>
              <th scope="col">
                <i className="fa fa-info-circle text-info" />
              </th>
            </tr>
          </thead>
          <tbody>{this.renderAllUser()}</tbody>
        </table>
      </div>
    );
  }
}

UserComponent.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserComponent;
