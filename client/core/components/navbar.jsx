import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarComponent extends Component {
  render() {
    const pathname = window.location.pathname;
    return (
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            MERNjs <small>client</small>
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
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav mr-auto">
              <li className={`nav-item ${pathname == '/home' ? 'active' : ''}`}>
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </li>
              <li
                className={`nav-item ${pathname == '/blogs' ? 'active' : ''}`}
              >
                <Link to="/blogs" className="nav-link">
                  Blog
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav navbar-right">
              <li className="nav-item">
                <a href="/admin" target="_blank" className="nav-link">
                  <i className="fa fa-sign-in" aria-hidden="true"></i> Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavbarComponent;
