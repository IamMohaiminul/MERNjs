'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getAllUserRole } from '../actions/getAllUserRole.js';
import { createUser } from '../actions/createUser.js';

import UserCreateComponent from '../components/UserCreateComponent.jsx';

class UserCreateContainer extends Component {
  componentDidMount() {
    this.props.getAllUserRole();
  }

  render() {
    return (
      <UserCreateComponent
        allUserRole={this.props.allUserRole}
        createUser={this.props.createUser} />
    );
  }
}

// Get apps store and pass it as props to UserCreateContainer
//  > whenever store changes, the UserCreateContainer will automatically re-render
// "store.allUserRole" is set in reducers.js
function mapStateToProps(store) {
  return {
    allUserRole: store.allUserRole
  };
}

// Get actions and pass them as props to to UserCreateContainer
//  > now UserCreateContainer has this.props.getAllUserRole
//  > now UserCreateContainer has this.props.createUser
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    getAllUserRole: getAllUserRole,
    createUser: createUser
  }, dispatch);
}

// We don't want to return the plain UserCreateContainer (component) anymore,
// we want to return the smart Container
//  > UserCreateContainer is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserCreateContainer);
