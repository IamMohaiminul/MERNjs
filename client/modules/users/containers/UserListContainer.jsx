'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import toastr from 'toastr';
import { browserHistory } from 'react-router';

import { getAllUser } from '../actions/getAllUser.js';

import UserListComponent from '../components/UserListComponent.jsx';

class UserListContainer extends Component {
  componentDidMount() {
    this.props.getAllUser();
  }

  render() {
    return (
      <UserListComponent
        allUser={this.props.allUser} />
    );
  }
}

// Get apps store and pass it as props to UserListContainer
//  > whenever store changes, the UserListContainer will automatically re-render
// "store.allUser" is set in reducers.js
function mapStateToProps(store) {
  return {
    allUser: store.allUser
  };
}

// Get actions and pass them as props to to UserListContainer
//  > now UserListContainer has this.props.getAllUser
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    getAllUser: getAllUser
  }, dispatch);
}

// We don't want to return the plain UserListContainer (component) anymore,
// we want to return the smart Container
//  > UserListContainer is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserListContainer);
