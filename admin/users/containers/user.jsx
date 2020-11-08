import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getAllUser from '../actions/getAllUser';
import UserComponent from '../components/user';

class UserContainer extends Component {
  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  render() {
    const { users } = this.props;
    return <UserComponent users={users} />;
  }
}

UserContainer.propTypes = {
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

// Get apps store and pass it as props to UserContainer
//  > whenever store changes, the UserContainer will automatically re-render
// "store.allUser" is set in reducers.js
const mapStateToProps = (store) => ({
  users: store.allUser,
});

// Get actions and pass them as props to to UserContainer
//  > now UserContainer has this.props.getAllUser
const matchDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getUsers: getAllUser,
    },
    dispatch,
  );

// We don't want to return the plain UserContainer (component) anymore,
// we want to return the smart Container
//  > UserContainer is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserContainer);
