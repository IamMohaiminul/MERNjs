import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NotFound extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("NotFound component...");
  }

  render() {
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <h1 className='text-center'>404... This page is not found!</h1>
        </div>
      </div>
    );
  }
}
