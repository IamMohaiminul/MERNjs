'use strict';

import React, { Component } from 'react';

import NavBarContainer from '../../core/containers/NavBarContainer.jsx';
import FooterComponent from '../../core/components/FooterComponent.jsx';

class AuthLayout extends Component {
  componentDidMount() {
    console.log('AuthLayout...');
  }

  render() {
    return (
      <div className='container-fluid'>
        <NavBarContainer />
        <div id='container'>
          {this.props.children}
        </div>
        <FooterComponent />
      </div>
    );
  }
}

export default AuthLayout;
