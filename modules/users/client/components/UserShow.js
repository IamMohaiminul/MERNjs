import React, { Component } from 'react';

class UserShow extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("User Show Component...");
  }

  render() {
    return (
      <div className='row'>
        <div className='col-xs-4 col-xs-offset-4'>
          <h3 className='text-center'>User Show Component</h3>
          <h6>ID: {this.props.params._id}</h6>
        </div>
      </div>
    );
  }
}

export default UserShow;
