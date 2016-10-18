'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import toastr from 'toastr';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

class UserCreateComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateOfBirth: moment()
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <h3 className='text-center'>User Create Component</h3>
          <form className='form-horizontal' onSubmit={this.handleSubmit.bind(this)}>
            <div className='form-group'>
              <label htmlFor='name' className='col-xs-2 control-label'>Name (*)</label>
              <div className='col-xs-10'>
                <input
                  type='text'
                  className='form-control'
                  ref='name'
                  placeholder='Name' />
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='email' className='col-xs-2 control-label'>Email (*)</label>
              <div className='col-xs-10'>
                <input
                  type='email'
                  className='form-control'
                  ref='email'
                  placeholder='Email' />
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='password' className='col-xs-2 control-label'>Password (*)</label>
              <div className='col-xs-10'>
                <input
                  type='password'
                  className='form-control'
                  ref='password'
                  placeholder='Password' />
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='dateOfJoin' className='col-xs-2 control-label'>Date of Birth</label>
              <div className='col-xs-10'>
                <DatePicker
                  dateFormat='YYYY-MM-DD'
                  selected={this.state.dateOfBirth}
                  placeholderText={moment().format('YYYY-MM-DD')}
                  onChange={this.handleDateOfBirthChange.bind(this)}
                  className='form-control' />
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='role' className='col-xs-2 control-label'>Role (*)</label>
              <div className='col-xs-10'>
                <select className='form-control' ref='roleId'>
                  {this.renderRoles()}
                </select>
              </div>
            </div>
            <div className='form-group'>
              <div className='col-xs-offset-2 col-xs-5'>
                <Link to='/users' className='btn btn-default btn-block'>Cancel</Link>
              </div>
              <div className='col-xs-5'>
                <button type='submit' className='btn btn-primary btn-block'>Add User</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  renderRoles() {
    return this.props.allUserRole.map((role) => {
      return (
        <option value={role._id} key={role._id}>{role.name}</option>
      );
    });
  }

  handleDateOfBirthChange(date) {
    this.setState({
      dateOfBirth: date
    });
  }

  handleSubmit(event) {
    const thisObj = this;
    event.preventDefault();

    const name = ReactDOM.findDOMNode(thisObj.refs.name).value.trim();
    const email = ReactDOM.findDOMNode(thisObj.refs.email).value.trim();
    const password = ReactDOM.findDOMNode(thisObj.refs.password).value.trim();
    const roleId = ReactDOM.findDOMNode(thisObj.refs.roleId).value.trim();

    // Validations
    if (name.length < 1) {
      toastr.warning('Name is required.', 'Create User');
      return false;
    }
    if (email.length < 1) {
      toastr.warning('Email is required.', 'Create User');
      return false;
    }
    if (password.length < 1) {
      toastr.warning('Password is required.', 'Create User');
      return false;
    }
    if (roleId.length < 1) {
      toastr.warning('Role is required.', 'Create User');
      return false;
    }

    // create a Employee object
    const user = {
      name,
      email,
      password,
      dateOfBirth: this.state.dateOfBirth,
      roleId
    };

    // call the action
    $('#spinner').css({'display': ''});
    $('#container').css({'display': 'none'});
    this.props.createUser(user, function(err, res) {
      $('#spinner').css({'display': 'none'});
      $('#container').css({'display': ''});
      if (err) {
        console.error('createUser...', err);
        toastr.error(err.message, 'Create User');
      } else {
        console.log('createUser...', res);
        toastr.success(res.message, 'Create User');

        // clear form
        ReactDOM.findDOMNode(thisObj.refs.name).value = '';
        ReactDOM.findDOMNode(thisObj.refs.email).value = '';
        ReactDOM.findDOMNode(thisObj.refs.password).value = '';

        //
        browserHistory.push('/users');
      }
    });
  }

}

export default UserCreateComponent;
