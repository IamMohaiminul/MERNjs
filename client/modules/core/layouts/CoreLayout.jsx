'use strict';

import React, { Component } from 'react';

import NavBarContainer from '../containers/NavBarContainer.jsx';
import FooterComponent from '../components/FooterComponent.jsx';

class CoreLayout extends Component {
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

export default CoreLayout;
