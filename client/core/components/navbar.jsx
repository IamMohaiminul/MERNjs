import React from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent = () => (
  <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
    <div className="container">
      <Link to="/" className="navbar-brand">
        MERNjs
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarColor03">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/blogs" className="nav-link">
              Blog
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav navbar-right">
          <li className="nav-item active">
            <a href="/admin" target="_blank" className="nav-link">
              <i className="fa fa-sign-in" aria-hidden="true" />
              &nbsp;Login
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavbarComponent;
