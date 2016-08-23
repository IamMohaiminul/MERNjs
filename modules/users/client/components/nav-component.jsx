'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

class NavComponent extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName="active">Home</Link>
          </li>
          <li>
            <Link to="/users" activeClassName="active">Users</Link>
          </li>
          <li>
            <Link to="/auth" activeClassName="active">Auth</Link>
          </li>
          <li>
            <Link to="/auth/logout" activeClassName="active">Logout</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavComponent;
