'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { authLogin } from '../actions/authLogin.js';
import AuthLoginComponent from '../components/AuthLoginComponent.jsx';

class AuthLoginContainer extends Component {
  render() {
    return (
      <AuthLoginComponent authLogin={this.props.authLogin} />
    );
  }
}

// Get actions and pass them as props to to AuthLoginContainer
//  > now AuthLoginContainer has this.props.createEmployee
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    authLogin: authLogin
  }, dispatch);
}

// We don't want to return the plain AuthLoginContainer (component) anymore,
// we want to return the smart Container
//  > AuthLoginContainer is now aware of actions
export default connect(null, matchDispatchToProps)(AuthLoginContainer);
