'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import toastr from 'toastr';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

class AuthLoginComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <h3 className='text-center'>Auth Login Component</h3>
          <form className='form-horizontal' onSubmit={this.handleSubmit.bind(this)}>
            <div className='form-group'>
              <label htmlFor='email' className='col-xs-2 control-label'>Email Address</label>
              <div className='col-xs-10'>
                <input
                  type='email'
                  className='form-control'
                  ref='email'
                  placeholder='Email Address' />
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='password' className='col-xs-2 control-label'>Password</label>
              <div className='col-xs-10'>
                <input
                  type='password'
                  className='form-control'
                  ref='password'
                  placeholder='Password' />
              </div>
            </div>
            <div className='form-group'>
              <div className='col-xs-offset-7 col-xs-5'>
                <button type='submit' className='btn btn-primary btn-block'>Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  handleSubmit(event) {
    const thisObj = this;
    event.preventDefault();

    const email = ReactDOM.findDOMNode(thisObj.refs.email).value.trim();
    const password = ReactDOM.findDOMNode(thisObj.refs.password).value.trim();

    // Validations
    if (email.length < 1) {
      toastr.warning('Email Address is required.', 'Create Employee');
      return false;
    }
    if (password.length < 1) {
      toastr.warning('Password is required.', 'Create Employee');
      return false;
    }

    // create a user object
    const user = {
      email,
      password
    };

    // call the action
    $('#spinner').css({'display': ''});
    $('#container').css({'display': 'none'});
    this.props.authLogin(user, function (err, res) {
      $('#spinner').css({'display': 'none'});
      $('#container').css({'display': ''});
      if (err) {
        console.error('...AuthLoginComponent....', err);
        toastr.error(err.message, 'Auth Login');
      } else {
        console.log('authLogin...', res);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('permission', JSON.stringify(res.data.role.permission));
        localStorage.setItem('email', email);
        toastr.success(res.message, 'Auth Login');

        // clear form
        ReactDOM.findDOMNode(thisObj.refs.email).value = '';
        ReactDOM.findDOMNode(thisObj.refs.password).value = '';

        //
        browserHistory.push('/');
      }
    });
  }

}

export default AuthLoginComponent;
