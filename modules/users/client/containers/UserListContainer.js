import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectUser } from '../actions/index';

import UserListComponent from '../components/UserListComponent';

class UserListContainer extends Component {
  render() {
    return (
      <UserListComponent
        users={this.props.users}
        selectUser={this.props.selectUser} />
    );
  }
}

// Get apps store and pass it as props to UserListContainer
//  > whenever store changes, the UserListContainer will automatically re-render
function mapStateToProps(store) {
  return {
    users: store.users
  };
}

// Get actions and pass them as props to to UserListContainer
//  > now UserListContainer has this.props.selectUser
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectUser: selectUser
  }, dispatch);
}

// We don't want to return the plain UserListComponent (component) anymore,
// we want to return the smart Container
//  > UserListComponent is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserListContainer);
