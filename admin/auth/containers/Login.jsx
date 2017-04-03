import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LoginComponent from '../components/Login.jsx';

import { loginUser } from '../actions/login.js';

class LoginContainer extends Component {
  render() {
    return (
      <LoginComponent
        loginUser={this.props.loginUser} />
    );
  }
}

// Get apps store and pass it as props to LoginContainer
//  > whenever store changes, the LoginContainer will automatically re-render
function mapStateToProps(store) {
  return {
  };
}

// Get actions and pass them as props to to LoginContainer
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    loginUser: loginUser,
  }, dispatch);
}

// We don't want to return the plain LoginContainer (component) anymore,
// we want to return the smart Container
//  > LoginContainer is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(LoginContainer);
