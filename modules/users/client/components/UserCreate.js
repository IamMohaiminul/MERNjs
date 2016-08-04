import React, { Component } from 'react';

class UserCreate extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("User Create Component...");
  }

  render() {
    return (
      <div className='row'>
        <div className='col-xs-6 col-xs-offset-3'>
          <h3 className='text-center'>User Create Component</h3>
          <form className="form-horizontal" action="/api/users" method="POST">
            <div className="form-group">
              <label htmlFor="username" className="col-sm-2 control-label">Username</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="username" name="username" placeholder="Username" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="col-sm-2 control-label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="password" name="password" placeholder="Password" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-default">Sign in</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UserCreate;
