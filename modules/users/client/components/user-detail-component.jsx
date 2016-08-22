import React, {Component} from 'react';
import moment from 'moment';

class UserDetailComponent extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <h3 className='text-center'>User Details Component</h3>
          {this.props.user
            ? <div>
                <p>
                  <b>ID:</b>
                  {this.props.user._id}</p>
                <p>
                  <b>Username:</b>
                  {this.props.user.username}</p>
                <p>
                  <b>CreatedAt:</b>
                  {moment(this.props.user.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</p>
                <p>
                  <b>UpdatedAt:</b>
                  {moment(this.props.user.updatedAt).format("MMMM Do YYYY, h:mm:ss a")}</p>
              </div>
            : <p>
                <b>
                  <i>Please select a user...</i>
                </b>
              </p>
          }
        </div>
      </div>
    );
  }
}

export default UserDetailComponent;
