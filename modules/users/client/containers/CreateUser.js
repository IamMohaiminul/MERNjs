import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import toastr from 'toastr';

import { createUser } from '../actions/index';

class CreateUser extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Create User Container...");
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
    this.props.createUser(user);

    // Clear form
    ReactDOM.findDOMNode(this.refs.username).value = "";
    ReactDOM.findDOMNode(this.refs.password).value = "";
  }

  render() {
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <h3 className='text-center'>Create User Container</h3>
          <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <label htmlFor="username" className="col-sm-2 control-label">Username</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  ref="username"
                  placeholder="Username" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="col-sm-2 control-label">Password</label>
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
                <button type="submit" className="btn btn-default">Add User</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// Get actions and pass them as props to to CreateUser
//  > now CreateUser has this.props.createUser
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    createUser: createUser
  }, dispatch);
}

// We don't want to return the plain CreateUser (component) anymore,
// we want to return the smart Container
//  > CreateUser is now aware of actions
export default connect(null, matchDispatchToProps)(CreateUser);
