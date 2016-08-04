import React, { Component } from 'react';
import { Link } from 'react-router';

import Nav from '../components/Nav.js';

export default class CoreLayout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Core Layout...");
  }

  render() {
    return (
      <div className="container">
        <div className='row'>
          <div className='col-xs-12'>
          <h1 className='text-center'>Core Layout</h1>
            <Nav />
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
