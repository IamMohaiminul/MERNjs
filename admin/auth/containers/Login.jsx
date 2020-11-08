import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import loginUser from '../actions/login';
import LoginComponent from '../components/Login';

const LoginContainer = ({ login, history }) => (
  <LoginComponent loginUser={login} history={history} />
);

LoginContainer.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

// Get apps store and pass it as props to LoginContainer
//  > whenever store changes, the LoginContainer will automatically re-render
// eslint-disable-next-line no-unused-vars
const mapStateToProps = (store) => ({});

// Get actions and pass them as props to to LoginContainer
const matchDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      login: loginUser,
    },
    dispatch,
  );

// We don't want to return the plain LoginContainer (component) anymore,
// we want to return the smart Container
//  > LoginContainer is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(LoginContainer);
