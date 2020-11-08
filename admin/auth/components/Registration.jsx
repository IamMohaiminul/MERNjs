import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import toastr from 'toastr';

class RegistrationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      emailAddress: '',
      password: '',
      confirmPassword: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(event) {
    const { name } = event.target;
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    this.setState({ [name]: value });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const { registerUser, history } = this.props;
    const { fullName, emailAddress, password, confirmPassword } = this.state;

    if (fullName.trim().length < 1) {
      toastr.warning('Full Name is required.', 'MERNjs');
      return false;
    }
    if (emailAddress.trim().length < 1) {
      toastr.warning('Email Address is required.', 'MERNjs');
      return false;
    }
    if (password.trim().length < 1) {
      toastr.warning('Password is required.', 'MERNjs');
      return false;
    }
    if (password !== confirmPassword) {
      toastr.warning('Confirm Password is not match.', 'MERNjs');
      return false;
    }

    registerUser(
      {
        fullName,
        emailAddress,
        password,
      },
      (err, res) => {
        if (err) {
          toastr.error(err.message, 'MERNjs');
          return false;
        }
        toastr.success(res.message, 'MERNjs');
        history.push('/admin/auth');
        return true;
      },
    );
    return null;
  }

  render() {
    const { fullName, emailAddress, password, confirmPassword } = this.state;
    return (
      <div className="row">
        <div className="col-lg-4 offset-lg-4">
          <form onSubmit={this.handleFormSubmit}>
            <fieldset>
              <legend className="text-center">Registration</legend>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  name="fullName"
                  type="text"
                  className="form-control"
                  value={fullName}
                  onChange={this.handleInputChange}
                  placeholder="Enter full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="emailAddress">Email Address</label>
                <input
                  name="emailAddress"
                  type="email"
                  className="form-control"
                  value={emailAddress}
                  onChange={this.handleInputChange}
                  placeholder="Enter email address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={this.handleInputChange}
                  placeholder="Enter password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  name="confirmPassword"
                  type="password"
                  className="form-control"
                  value={confirmPassword}
                  onChange={this.handleInputChange}
                  placeholder="Enter confirm password"
                />
              </div>
              <button type="submit" className="btn btn-block btn-primary">
                Submit
              </button>
              <hr />
              <Link to="/admin/auth/login" className="btn btn-block btn-dark">
                Already have an account
              </Link>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

RegistrationComponent.propTypes = {
  registerUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default RegistrationComponent;
