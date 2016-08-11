import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import toastr from 'toastr';

import { authUser } from '../actions/index';

class Auth extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Auth Component...");
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
    const res = this.props.authUser(user);
    if (res.payload.success) {
      // Clear form
      ReactDOM.findDOMNode(this.refs.username).value = "";
      ReactDOM.findDOMNode(this.refs.password).value = "";
      // triggered to users
      browserHistory.push('/users');
    }
  }

  render() {
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <h1 className='text-center'>Auth Component</h1>
          <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                ref="username"
                placeholder="Username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                ref="password"
                placeholder="Password" />
            </div>
            <button
              type="submit"
              className="btn btn-default">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

// Get actions and pass them as props to to Auth
//  > now Auth has this.props.authenticate
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    authUser: authUser
  }, dispatch);
}

// We don't want to return the plain Auth (component) anymore,
// we want to return the smart Auth
//  > Auth is now aware of actions
export default connect(null, matchDispatchToProps)(Auth);
