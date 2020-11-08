import PropTypes from 'prop-types';
import React from 'react';
import FooterComponent from '../components/footer';
import NavbarComponent from '../components/navbar';

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
