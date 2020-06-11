import React, { Component } from 'react';

import NavbarComponent from '../components/navbar.jsx';
import FooterComponent from '../components/footer.jsx';

class CoreLayout extends Component {
  render() {
    return (
      <div className="container-fluid">
        <NavbarComponent />
        <div className="content">{this.props.children}</div>
        <FooterComponent />
      </div>
    );
  }
}

export default CoreLayout;
