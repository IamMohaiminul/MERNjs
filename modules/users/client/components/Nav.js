import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Nav Component...");
  }

  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/" activeClassName="active">Home</Link></li>
          <li><Link to="/users" activeClassName="active">Users</Link></li>
        </ul>
      </nav>
    );
  }
}
