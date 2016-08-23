'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserDetailComponent from '../components/user-detail-component.jsx';

class UserDetailContainer extends Component {
  render() {
    return (
      <UserDetailComponent user={this.props.user} />
    );
  }
}

// Get apps store and pass it as props to UserDetailContainer
//  > whenever store changes, the UserDetailContainer will automatically re-render
// "store.activeUser" is set in reducers/index.js
function mapStateToProps(store) {
  return {
    user: store.activeUser
  };
}

// We don't want to return the plain UserDetailContainer (component) anymore,
// we want to return the smart Container
//  > UserDetailContainer is now aware of state
export default connect(mapStateToProps)(UserDetailContainer);
