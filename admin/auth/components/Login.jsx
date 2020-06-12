import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Link } from 'react-router-dom';
import toastr from 'toastr';

class LoginComponent extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 text-center">
          <h1 className="title">MERNjs</h1>
        </div>
        <div className="col-xs-4 col-xs-offset-4">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <label htmlFor="emailAddress">Email address</label>
              <input
                ref="emailAddress"
                type="email"
                className="form-control"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                ref="password"
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="col-xs-offset-6">
              <button type="submit" className="btn btn-block btn-primary">
                Sign In
              </button>
            </div>
            <div className="text-center">
              <p>
                <br />- OR -<br />
              </p>
              <Link
                to="/admin/auth/register"
                className="btn btn-block btn-default"
              >
                Register a new account
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  handleSubmit(event) {
    const _this = this;
    event.preventDefault();

    let emailAddress = ReactDOM.findDOMNode(
      _this.refs.emailAddress,
    ).value.trim();
    let password = ReactDOM.findDOMNode(_this.refs.password).value.trim();

    /*
     * Validation rules
     */
    if (emailAddress.length < 1) {
      toastr.warning('Email Address is required.', 'MERNjs');
      return false;
    }

    if (password.length < 1) {
      toastr.warning('Password is required.', 'MERNjs');
      return false;
    }

    this.props.loginUser(
      {
        emailAddress,
        password,
      },
      function (err, res) {
        if (err) {
          console.error('loginUser: ', err);
          toastr.error(err.message, 'MERNjs');
        } else {
          console.log('loginUser: ', res);
          toastr.success(res.message, 'MERNjs');
          browserHistory.push('/admin');
        }
      },
    );
  }
}

export default LoginComponent;
