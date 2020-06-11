import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DashboardComponent from '../components/Dashboard.jsx';

class DashboardContainer extends Component {
  render() {
    return <DashboardComponent />;
  }
}

// Get apps store and pass it as props to DashboardContainer
//  > whenever store changes, the DashboardContainer will automatically re-render
function mapStateToProps(store) {
  return {};
}

// Get actions and pass them as props to to DashboardContainer
function matchDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

// We don't want to return the plain DashboardContainer (component) anymore,
// we want to return the smart Container
//  > DashboardContainer is now aware of state and actions
export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(DashboardContainer);
