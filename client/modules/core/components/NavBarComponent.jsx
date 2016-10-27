'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBarComponent extends Component {
  render() {
    return (
      <nav className='navbar navbar-default navbar-fixed-top'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <Link to='/' className='navbar-brand'>
              MERN
              <small>v 0.0.0</small>
            </Link>
          </div>
          <ul className='nav navbar-nav'>
            {JSON.parse(localStorage.getItem('permission'))
              &&JSON.parse(localStorage.getItem('permission')).role
              && JSON.parse(localStorage.getItem('permission')).role.read
              ? <li><Link to='/roles'>Role</Link></li>
              : null
            }
            {JSON.parse(localStorage.getItem('permission'))
              && JSON.parse(localStorage.getItem('permission')).user
              && JSON.parse(localStorage.getItem('permission')).user.read
              ? <li><Link to='/users'>User</Link></li>
              : null
            }
          </ul>
          {localStorage.getItem('email')
          ? <ul className='nav navbar-nav navbar-right'>
              <li className='dropdown'>
                <Link
                  className='dropdown-toggle'
                  data-toggle='dropdown'
                  role='button'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  {localStorage.getItem('email')} <span className='caret'></span>
                </Link>
                <ul className='dropdown-menu'>
                  <li><Link to='/'>Profile</Link></li>
                  <li role='separator' className='divider'></li>
                  <li><Link to='/auth/logout'>Logout</Link></li>
                </ul>
              </li>
            </ul>
          : <ul className='nav navbar-nav navbar-right'>
              <li><Link to='/auth'>Login</Link></li>
            </ul>
          }
        </div>
      </nav>
    );
  }
}

export default NavBarComponent;
