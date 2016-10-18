'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createRole } from '../actions/createRole.js';

import RoleCreateComponent from '../components/RoleCreateComponent.jsx';

class RoleCreateContainer extends Component {
  render() {
    return (
      <RoleCreateComponent createRole={this.props.createRole} />
    );
  }
}

// Get actions and pass them as props to to RoleCreateContainer
//  > now RoleCreateContainer has this.props.createRole
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    createRole: createRole
  }, dispatch);
}

// We don't want to return the plain RoleCreateContainer (component) anymore,
// we want to return the smart Container
//  > RoleCreateContainer is now aware of actions
export default connect(null, matchDispatchToProps)(RoleCreateContainer);
