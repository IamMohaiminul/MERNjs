// Import CSS
import './auth-layout.css';

import React, { Component } from 'react';

class AuthLayout extends Component {
  render() {
    return (
      <div className="auth-box">
        <div className="auth-logo">
          <a href="#"><b>MERN</b>js</a>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default AuthLayout;
