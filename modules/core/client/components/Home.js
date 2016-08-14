import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Home Component...");
  }

  render() {
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <h1 className='text-center'>Welcome to MERN stack.</h1>
        </div>
      </div>
    );
  }
}
