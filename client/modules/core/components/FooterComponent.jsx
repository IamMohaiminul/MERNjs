'use strict';

import React, { Component } from 'react';

class FooterComponent extends Component {
  render() {
    return (
      <footer className='navbar-fixed-bottom'>
        <div className='text-center'>
          <p>
            <small>
              <a href='https://github.com/IamMohaiminul/MERNjs'>
                MERNjs
              </a> &copy; 2016
            </small>
          </p>
        </div>
      </footer>
    );
  }
}

export default FooterComponent;
