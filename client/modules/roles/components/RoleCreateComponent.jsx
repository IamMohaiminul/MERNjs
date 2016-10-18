'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import moment from 'moment';
import toastr from 'toastr';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

class RoleCreateComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <h3 className='text-center'>Role Create Component</h3>
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
              <label htmlFor='hierarchy' className='col-xs-2 control-label'>Hierarchy (*)</label>
              <div className='col-xs-10'>
                <input
                  type='number'
                  className='form-control'
                  ref='hierarchy'
                  min='1'
                  placeholder='Hierarchy' />
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='permissions' className='col-xs-2 control-label'>Permissions</label>
              <div className='col-xs-10'>
                <p>Role Access</p>
                <input
                  type='checkbox'
                  name='role'
                  value='create' /> Create &nbsp;
                <input
                  type='checkbox'
                  name='role'
                  value='read' /> Read &nbsp;
                <input
                  type='checkbox'
                  name='role'
                  value='update' /> Update &nbsp;
                <input
                  type='checkbox'
                  name='role'
                  value='delete' /> Delete &nbsp;
                <hr/>
                <p>User Access</p>
                <input
                  type='checkbox'
                  name='user'
                  value='create' /> Create &nbsp;
                <input
                  type='checkbox'
                  name='user'
                  value='read' /> Read &nbsp;
                <input
                  type='checkbox'
                  name='user'
                  value='update' /> Update &nbsp;
                <input
                  type='checkbox'
                  name='user'
                  value='delete' /> Delete &nbsp;
              </div>
            </div>
            <div className='form-group'>
              <div className='col-xs-offset-2 col-xs-5'>
                <Link to='/roles' className='btn btn-default btn-block'>Cancel</Link>
              </div>
              <div className='col-xs-5'>
                <button type='submit' className='btn btn-primary btn-block'>Add Role</button>
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

    const name = ReactDOM.findDOMNode(thisObj.refs.name).value.trim();
    const hierarchy = ReactDOM.findDOMNode(thisObj.refs.hierarchy).value.trim();

    // Validations
    if (name.length < 1) {
      toastr.warning('Name is required.', 'Create Role');
      return false;
    }
    if (hierarchy.length < 1) {
      toastr.warning('Hierarchy is required.', 'Create Role');
      return false;
    }
    if (parseInt(hierarchy) < 1) {
      toastr.warning('Hierarchy should be greater than zero.', 'Create Role');
      return false;
    }

    let role = {create: false, read: false, update: false, delete: false};
    $("input:checkbox[name=role]:checked").each(function() {
      role[$(this).val()] = true;
    });
    let user = {create: false, read: false, update: false, delete: false};
    $("input:checkbox[name=user]:checked").each(function() {
      user[$(this).val()] = true;
    });

    // create a Role object
    const objRole = {
      name,
      hierarchy,
      permission : { role, user }
    };

    // call the action
    $('#spinner').css({'display': ''});
    $('#container').css({'display': 'none'});
    this.props.createRole(objRole, function(err, res) {
      $('#spinner').css({'display': 'none'});
      $('#container').css({'display': ''});
      if (err) {
        console.error('createRole...', err);
        toastr.error(err.message, 'Create Role');
      } else {
        console.log('createRole...', res);
        toastr.success(res.message, 'Create Role');

        // clear form
        ReactDOM.findDOMNode(thisObj.refs.name).value = '';
        ReactDOM.findDOMNode(thisObj.refs.hierarchy).value = '';

        //
        browserHistory.push('/roles');
      }
    });
  }

}

export default RoleCreateComponent;
