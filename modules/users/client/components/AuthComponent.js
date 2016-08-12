// Import Styles
import './AuthComponent.scss';

import React, { Component } from 'react';

import LoginContainer from '../containers/LoginContainer';

class AuthComponent extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <h1 className='text-center'>Auth Component</h1>
          <div className='row'>
            <div className='col-xs-offset-3 col-xs-6'>
              <LoginContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthComponent;
