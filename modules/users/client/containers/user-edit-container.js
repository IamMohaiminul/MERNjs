import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateUser, deleteUser } from '../actions/index';

import UserEditComponent from '../components/user-edit-component';

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
    this.props.updateUser(user, _id);
  }

  deleteUser(_id) {
    this.props.deleteUser(_id);
  }
}

// Get apps store and pass it as props to UserEditContainer
//  > whenever store changes, the UserEditContainer will automatically re-render
// "store.activeUser" is set in reducers/index.js
function mapStateToProps(store) {
  return {
    user: store.activeUser
  };
}

// Get actions and pass them as props to to UserEditContainer
//  > now UserEditContainer has this.props.updateUser
//  > now UserEditContainer has this.props.deleteUser
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    updateUser: updateUser,
    deleteUser: deleteUser
  }, dispatch);
}

// We don't want to return the plain UserEditContainer (component) anymore,
// we want to return the smart Container
//  > UserEditContainer is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserEditContainer);
