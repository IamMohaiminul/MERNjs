'use strict';

// Import CSS
import './auth-layout.css';

import React, { Component } from 'react';

class AuthLayout extends Component {
  render() {
    return (
      <div className='auth-box'>
        <div className='auth-logo'>
          <a href='/'>
            <b>MERN</b>js</a>
        </div>
        {this.props.children}
        <footer>
          <div className='text-center padder clearfix'>
            <p>
              <small>
                <a href='https://github.com/IamMohaiminul/MERNjs'>
                  A scaffolding of MERN stack
                </a>
                &copy; 2016
              </small>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default AuthLayout;
