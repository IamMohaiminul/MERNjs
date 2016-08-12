import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { authUser } from '../actions/index';

import LoginComponent from '../components/LoginComponent';

class LoginContainer extends Component {
  render() {
    return (
      <LoginComponent
        authUser={this.authUser.bind(this)} />
    );
  }

  authUser(user) {
    const res = this.props.authUser(user);
    if (res.payload.success) {
      // triggered to users
      browserHistory.push('/users');
    }
  }
}

// Get actions and pass them as props to to AuthContainer
//  > now AuthContainer has this.props.createUser
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    authUser: authUser
  }, dispatch);
}

// We don't want to return the plain AuthContainer (component) anymore,
// we want to return the smart Container
//  > AuthContainer is now aware of actions
export default connect(null, matchDispatchToProps)(LoginContainer);
