import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import toastr from 'toastr';

import { updateUser, deleteUser } from '../actions/index';

class EditUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps...');
    // You don't have to do this check first, but it can help prevent an unneeded render
    // if (nextProps.user && nextProps.user.username && nextProps.user.username !== this.state.username) {
    if (nextProps.user && nextProps.user.username && !_.isEqual(nextProps.user.username, this.state.username)) {
      this.setState({
        username: nextProps.user.username
      });
    }
  }

  componentDidMount() {
    console.log("Edit User Component...componentDidMount");
  }

  handleUsernameChange(event) {
    console.log('handleUsernameChange: ', event);
    this.setState({
      username: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const username = ReactDOM.findDOMNode(this.refs.username).value.trim();
    const password = ReactDOM.findDOMNode(this.refs.password).value.trim();

    if (username.length < 1) {
      toastr.warning('Username is required');
      return false;
    }
    if (password.length < 1) {
      toastr.warning('Password is required');
      return false;
    }

    // create object
    const user = {
      username: username,
      password: password
    }

    // call the action
    this.props.updateUser(user, this.props.user._id);

    // Clear form
    ReactDOM.findDOMNode(this.refs.password).value = "";
  }

  deleteUser(event) {
    console.log('deleteUser...');
    this.props.deleteUser(this.props.user._id);
  }

  render() {
    console.log('state username: ', this.state.username);
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <h3 className='text-center'>Edit User Container</h3>
          { this.props.user ?
            <div>
              <form
                className="form-horizontal"
                onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                  <label
                    htmlFor="username"
                    className="col-sm-2 control-label">
                    Username
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      ref="username"
                      value={this.state.username}
                      onChange={this.handleUsernameChange.bind(this)}
                      placeholder="Username" />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="password"
                    className="col-sm-2 control-label">
                    Password
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      className="form-control"
                      ref="password"
                      placeholder="Password" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button
                      type="submit"
                      className="btn btn-default">
                      Edit User
                    </button>
                  </div>
                </div>
              </form>
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#userDeleteConfirm">
                Delete User
              </button>
              {/* User delete confirmation modal */}
              <div
                id="userDeleteConfirm"
                className="modal fade"
                tabIndex="-1"
                role="dialog">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                      <h4 className="modal-title">Delete User</h4>
                    </div>
                    <div className="modal-body">
                      <p>Are you want to delete this user?</p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-default"
                        data-dismiss="modal">
                        No
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-dismiss="modal"
                        onClick={this.deleteUser.bind(this)}>
                        Yes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div> : <p>Please select a user...</p>
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    updateUser: updateUser,
    deleteUser: deleteUser
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(EditUser);
