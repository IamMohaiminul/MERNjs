import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import toastr from 'toastr';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
      password: '',
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
    const { loginUser, history } = this.props;
    const { emailAddress, password } = this.state;

    if (emailAddress.trim().length < 1) {
      toastr.warning('Email Address is required.', 'MERNjs');
      return false;
    }
    if (password.trim().length < 1) {
      toastr.warning('Password is required.', 'MERNjs');
      return false;
    }

    loginUser(
      {
        emailAddress,
        password,
      },
      (err, res) => {
        if (err) {
          toastr.error(err.message, 'MERNjs');
          return false;
        }
        toastr.success(res.message, 'MERNjs');
        history.push('/admin');
        return true;
      },
    );
    return null;
  }

  render() {
    const { emailAddress, password } = this.state;
    return (
      <div className="row">
        <div className="col-lg-4 offset-lg-4">
          <form onSubmit={this.handleFormSubmit}>
            <fieldset>
              <legend className="text-center">Login</legend>
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
              <button type="submit" className="btn btn-block btn-primary">
                Submit
              </button>
              <hr />
              <Link
                to="/admin/auth/register"
                className="btn btn-block btn-dark"
              >
                Register a new account
              </Link>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

LoginComponent.propTypes = {
  loginUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default LoginComponent;
