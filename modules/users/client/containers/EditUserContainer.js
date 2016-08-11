import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateUser, deleteUser } from '../actions/index';

import EditUserComponent from '../components/EditUserComponent';

class EditUserContainer extends Component {
  render() {
    return (
      <EditUserComponent
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

// Get apps store and pass it as props to EditUserContainer
//  > whenever store changes, the EditUserContainer will automatically re-render
// "store.activeUser" is set in reducers/index.js
function mapStateToProps(store) {
  return {
    user: store.activeUser
  };
}

// Get actions and pass them as props to to EditUserContainer
//  > now EditUserContainer has this.props.updateUser
//  > now EditUserContainer has this.props.deleteUser
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    updateUser: updateUser,
    deleteUser: deleteUser
  }, dispatch);
}

// We don't want to return the plain EditUserContainer (component) anymore,
// we want to return the smart Container
//  > EditUserContainer is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(EditUserContainer);
