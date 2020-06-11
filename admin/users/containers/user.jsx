import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import UserComponent from '../components/user.jsx';

import { getAllUser } from '../actions/getAllUser.js';

class UserContainer extends Component {
  componentWillMount() {
    this.props.getAllUser();
  }

  render() {
    return <UserComponent allUser={this.props.allUser} />;
  }
}

// Get apps store and pass it as props to UserContainer
//  > whenever store changes, the UserContainer will automatically re-render
// "store.allUser" is set in reducers.js
function mapStateToProps(store) {
  return {
    allUser: store.allUser,
  };
}

// Get actions and pass them as props to to UserContainer
//  > now UserContainer has this.props.getAllUser
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getAllUser: getAllUser,
    },
    dispatch,
  );
}

// We don't want to return the plain UserContainer (component) anymore,
// we want to return the smart Container
//  > UserContainer is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserContainer);
