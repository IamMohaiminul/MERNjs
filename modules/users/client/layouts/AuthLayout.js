import React, { Component } from 'react';

import Nav from '../components/Nav.js';

class AuthLayout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Auth Layout...");
  }

  render() {
    return (
      <div className="container">
        <div className='row'>
          <div className='col-xs-12'>
            <h1 className='text-center'>Auth Layout</h1>
            <Nav />
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default AuthLayout;
