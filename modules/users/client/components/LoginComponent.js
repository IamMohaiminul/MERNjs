// Import Styles
import './LoginComponent.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import toastr from 'toastr';

class LoginComponent extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <h3 className='text-center'>Login Component</h3>
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
              <div className="col-xs-offset-2 col-xs-10">
                <button type="submit" className="btn btn-default">Login</button>
              </div>
            </div>
          </form>
        </div>
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
