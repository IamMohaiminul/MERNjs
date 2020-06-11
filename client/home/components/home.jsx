import React, { Component } from 'react';
import toastr from 'toastr';

class HomeComponent extends Component {
  componentDidMount() {
    toastr.info('Welcome to MERNjs.', 'Client | MERNjs');
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 text-center">
          <img src="/images/mernjs.png" width="150px" alt="MERNjs" />
          <h1>Welcome to MERNjs</h1>
          <p>
            Client Application <small> in {process.env.NODE_ENV}</small>
          </p>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
