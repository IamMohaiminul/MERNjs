'use strict';

import React, { Component } from 'react';

import NavBarContainer from '../../core/containers/NavBarContainer.jsx';
import FooterComponent from '../../core/components/FooterComponent.jsx';

class UserLayout extends Component {
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

export default UserLayout;
