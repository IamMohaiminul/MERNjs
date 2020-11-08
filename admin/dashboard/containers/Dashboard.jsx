import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DashboardComponent from '../components/Dashboard';

const DashboardContainer = () => <DashboardComponent />;

// Get apps store and pass it as props to DashboardContainer
//  > whenever store changes, the DashboardContainer will automatically re-render
// eslint-disable-next-line no-unused-vars
const mapStateToProps = (store) => ({});

// Get actions and pass them as props to to DashboardContainer
const matchDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);
// We don't want to return the plain DashboardContainer (component) anymore,
// we want to return the smart Container
//  > DashboardContainer is now aware of state and actions
export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(DashboardContainer);
