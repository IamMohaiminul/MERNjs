'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import toastr from 'toastr';

import { updateUser, deleteUser, getAllUser } from '../actions/index';
import UserEditComponent from '../components/user-edit-component.jsx';

class UserEditContainer extends Component {
  render() {
    return (
      <UserEditComponent
        user={this.props.user}
        updateUser={this.updateUser.bind(this)}
        deleteUser={this.deleteUser.bind(this)} />
      );
  }

  updateUser(user, _id) {
    const res = this.props.updateUser(user, _id);
    if (res.payload.success) {
      toastr.success(res.payload.message);
    } else {
      toastr.warning(res.payload.message);
    }

    this.props.getAllUser();
  }

  deleteUser(_id) {
    const res = this.props.deleteUser(_id);
    if (res.payload.success) {
      toastr.success(res.payload.message);
    } else {
      toastr.warning(res.payload.message);
    }

    this.props.getAllUser();
  }
}

// Get apps store and pass it as props to UserEditContainer
//  > whenever store changes, the UserEditContainer will automatically re-render
// "store.activeUser" is set in reducers/index.js
function mapStateToProps(store) {
  return {
    user: store.activeUser,
  };
}

// Get actions and pass them as props to to UserEditContainer
//  > now UserEditContainer has this.props.updateUser
//  > now UserEditContainer has this.props.deleteUser
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    updateUser: updateUser,
    deleteUser: deleteUser,
    getAllUser: getAllUser,
  }, dispatch);
}

// We don't want to return the plain UserEditContainer (component) anymore,
// we want to return the smart Container
//  > UserEditContainer is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserEditContainer);
