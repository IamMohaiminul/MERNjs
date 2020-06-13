import React from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent = () => (
  <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
    <div className="container">
      <Link to="/admin" className="navbar-brand">
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
            <Link to="/admin/dashboard" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/admin/auth" className="nav-link">
              Auth
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/admin/users" className="nav-link">
              User
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/admin/blogs" className="nav-link">
              Blog
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav navbar-right">
          <li className="nav-item active">
            <Link to="/admin/auth/logout" className="nav-link">
              <i className="fa fa-sign-out" aria-hidden="true" />
              &nbsp;Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavbarComponent;
