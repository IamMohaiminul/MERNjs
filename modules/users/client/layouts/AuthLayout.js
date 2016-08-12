// Import Styles
import './AuthLayout.scss';

import React, { Component } from 'react';

import NavComponent from '../components/NavComponent';

class AuthLayout extends Component {
  render() {
    return (
      <div className="container">
        <div className='row'>
          <div className='col-xs-12'>
            <h1 className='text-center'>Auth Layout</h1>
            <NavComponent />
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default AuthLayout;
