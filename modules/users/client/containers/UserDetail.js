import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

class UserDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("User Detail Container...");
  }

  render() {
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <h3 className='text-center'>User Detail Container</h3>
          { this.props.user ?
            <div>
              <p>ID: {this.props.user._id}</p>
              <p>Username: {this.props.user.username}</p>
              <p>createdAt: {moment(this.props.user.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</p>
              <p>updatedAt: {moment(this.props.user.updatedAt).format("MMMM Do YYYY, h:mm:ss a")}</p>
            </div> : <p>Please select a user...</p>
          }
        </div>
      </div>
    );
  }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);
