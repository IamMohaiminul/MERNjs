import React, { Component } from 'react';

class HomeComponent extends Component {
  componentDidMount() {
    console.log('Welcome to MERNjs!');
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12 text-center">
          <img src="/images/logo.png" width="150px" alt="MERNjs" />
          <br />
          <h1 className="msg-h1">Welcome to MERNjs!</h1>
          <p>an open-source full-stack JavaScript solution</p>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
