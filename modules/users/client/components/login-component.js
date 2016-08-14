// Import CSS
import './login-component.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import toastr from 'toastr';

class LoginComponent extends Component {
  render() {
    return (
      <div className="login-box-body">
        <p className="login-box-msg">Sign in to start your session</p>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group has-feedback">
            <input
              type="text"
              className="form-control"
              ref="username"
              placeholder="Username" />
            <span className="glyphicon glyphicon-user form-control-feedback"></span>
          </div>
          <div className="form-group has-feedback">
            <input
              type="password"
              className="form-control"
              ref="password"
              placeholder="Password" />
            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div className="row">
            <div className="col-xs-offset-8 col-xs-4">
              <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
            </div>
          </div>
        </form>
      </div>
    );
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
    this.props.authUser(user);

    // Clear form
    ReactDOM.findDOMNode(this.refs.username).value = "";
    ReactDOM.findDOMNode(this.refs.password).value = "";
  }
}

export default LoginComponent;
