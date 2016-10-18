'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import toastr from 'toastr';
import { browserHistory } from 'react-router';

import { getAllRole } from '../actions/getAllRole.js';

import RoleListComponent from '../components/RoleListComponent.jsx';

class RoleListContainer extends Component {
  componentDidMount() {
    this.props.getAllRole();
  }

  render() {
    return (
      <RoleListComponent
        allRole={this.props.allRole} />
    );
  }
}

// Get apps store and pass it as props to RoleListContainer
//  > whenever store changes, the RoleListContainer will automatically re-render
// "store.getAllRole" is set in reducers.js
function mapStateToProps(store) {
  return {
    allRole: store.allRole
  };
}

// Get actions and pass them as props to to RoleListContainer
//  > now RoleListContainer has this.props.getAllRole
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    getAllRole: getAllRole
  }, dispatch);
}

// We don't want to return the plain RoleListContainer (component) anymore,
// we want to return the smart Container
//  > RoleListContainer is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(RoleListContainer);
