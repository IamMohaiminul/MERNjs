import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';

import { selectUser } from '../actions/index';

class UserList extends Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    return this.props.users.map((user) => {
      return (
        <tr key={user._id} onClick={() => this.props.selectUser(user)}>
          <td>{user._id}</td>
          <td>{user.username}</td>
          <td>{user.password}</td>
          <td>{moment(user.createdAt).format("MMM Do YY, h:mm:ss a")}</td>
          <td>{moment(user.updatedAt).format("MMM Do YY, h:mm:ss a")}</td>
        </tr>
      );
    });
  }

  componentDidMount() {
    console.log("User List Container...");
  }

  render() {
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <h3 className='text-center'>User List Container</h3>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Password</th>
                <th>Created At</th>
                <th>Updated At</th>
              </tr>
            </thead>
            <tbody>
              {this.renderList()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

// Get apps state and pass it as props to UserIndex
//  > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
  return {
    users: state.users
  };
}

// Get actions and pass them as props to to UserIndex
//  > now UserIndex has this.props.selectUser
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectUser: selectUser
  }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//  > UserIndex is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
