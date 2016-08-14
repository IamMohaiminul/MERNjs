import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createUser } from '../actions/index';

import UserCreateComponent from '../components/user-create-component';

class UserCreateContainer extends Component {
  render() {
    return (
      <UserCreateComponent
        createUser={this.createUser.bind(this)} />
    );
  }

  createUser(user) {
    this.props.createUser(user);
  }
}

// Get actions and pass them as props to to UserCreateContainer
//  > now UserCreateContainer has this.props.createUser
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    createUser: createUser
  }, dispatch);
}

// We don't want to return the plain UserCreateContainer (component) anymore,
// we want to return the smart Container
//  > UserCreateContainer is now aware of actions
export default connect(null, matchDispatchToProps)(UserCreateContainer);
