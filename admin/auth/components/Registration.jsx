import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Link } from 'react-router-dom';
import toastr from 'toastr';

class RegistrationComponent extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 text-center">
          <h1 className="title">MERNjs</h1>
        </div>
        <div className="col-xs-4 col-xs-offset-4">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                ref="fullName"
                type="text"
                className="form-control"
                placeholder="Full Name"
              />
            </div>
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
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                ref="confirmPassword"
                type="password"
                className="form-control"
                placeholder="Confirm Password"
              />
            </div>
            <div className="col-xs-offset-6">
              <button type="submit" className="btn btn-block btn-primary">
                Register
              </button>
            </div>
            <div className="text-center">
              <p>
                <br />- OR -<br />
              </p>
              <Link
                to="/admin/auth/login"
                className="btn btn-block btn-default"
              >
                I already have a account
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

    let fullName = ReactDOM.findDOMNode(_this.refs.fullName).value.trim();
    let emailAddress = ReactDOM.findDOMNode(
      _this.refs.emailAddress,
    ).value.trim();
    let password = ReactDOM.findDOMNode(_this.refs.password).value.trim();
    let confirmPassword = ReactDOM.findDOMNode(
      _this.refs.confirmPassword,
    ).value.trim();

    /*
     * Validation rules
     */
    if (fullName.length < 1) {
      toastr.warning('Full Name is required.', 'MERNjs');
      return false;
    }

    if (emailAddress.length < 1) {
      toastr.warning('Email Address is required.', 'MERNjs');
      return false;
    }

    if (password.length < 1) {
      toastr.warning('Password is required.', 'MERNjs');
      return false;
    }

    if (password !== confirmPassword) {
      toastr.warning('Confirm Password is not match.', 'MERNjs');
      return false;
    }

    this.props.registerUser(
      {
        fullName,
        emailAddress,
        password,
      },
      function (err, res) {
        if (err) {
          console.error('registerUser: ', err);
          toastr.error(err.message, 'MERNjs');
        } else {
          console.log('registerUser: ', res);
          toastr.success(res.message, 'MERNjs');
          browserHistory.push('/admin/auth');
        }
      },
    );
  }
}

export default RegistrationComponent;
