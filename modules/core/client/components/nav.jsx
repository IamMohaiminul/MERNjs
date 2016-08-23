'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {
  render() {
    return (
      <nav className="">
        <ul>
          <li>
            <Link to="/" activeClassName="active">Home</Link>
          </li>
          <li>
            <Link to="/users" activeClassName="active">Users</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
