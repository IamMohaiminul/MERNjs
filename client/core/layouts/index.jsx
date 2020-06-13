import React from 'react';
import PropTypes from 'prop-types';

import NavbarComponent from '../components/navbar';
import FooterComponent from '../components/footer';

const CoreLayout = ({ children }) => (
  <div className="container">
    <NavbarComponent />
    <div className="main-container">{children}</div>
    <FooterComponent />
  </div>
);

CoreLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default CoreLayout;
