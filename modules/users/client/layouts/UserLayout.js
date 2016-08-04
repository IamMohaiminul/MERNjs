import React, { Component } from 'react';
import { Link } from 'react-router'

import Nav from '../components/Nav.js';

class UserLayout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("User Layout...");
  }

  render() {
    return (
      <div className="container">
        <div className='row'>
          <div className='col-xs-12'>
            <h1 className='text-center'>User Layout</h1>
            <Nav />
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default UserLayout;
