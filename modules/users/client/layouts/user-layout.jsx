'use strict';

import React, { Component } from 'react';

import NavComponent from '../components/nav-component.jsx';

class UserLayout extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>User Layout</h1>
        <NavComponent/>
        {this.props.children}
        <footer>
          <div className='text-center padder clearfix'>
            <p>
              <small>
                <a href='https://github.com/IamMohaiminul/MERNjs'>
                  A scaffolding of MERN stack
                </a>
                &copy; 2016
              </small>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default UserLayout;
