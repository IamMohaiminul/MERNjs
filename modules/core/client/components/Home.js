import React, { Component } from 'react';
import { Link } from 'react-router';

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
          <h3 className='text-center'>Home Component</h3>
        </div>
      </div>
    );
  }
}
