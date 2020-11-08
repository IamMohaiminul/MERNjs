import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import registerUser from '../actions/register';
import RegistrationComponent from '../components/Registration';

const RegistrationContainer = ({ register, history }) => (
  <RegistrationComponent registerUser={register} history={history} />
);

RegistrationContainer.propTypes = {
  register: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

// Get apps store and pass it as props to RegistrationContainer
//  > whenever store changes, the RegistrationContainer will automatically re-render
// eslint-disable-next-line no-unused-vars
const mapStateToProps = (store) => ({});

// Get actions and pass them as props to to RegistrationContainer
const matchDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      register: registerUser,
    },
    dispatch,
  );

// We don't want to return the plain RegistrationContainer (component) anymore,
// we want to return the smart Container
//  > RegistrationContainer is now aware of state and actions
export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(RegistrationContainer);
