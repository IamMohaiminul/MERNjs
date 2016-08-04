import React, { Component } from 'react';

class UserIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("User Index Component...");
  }

  render() {
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <h3 className='text-center'>User Index Component</h3>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Created At</th>
                <th>Updated At</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>ABC</td>
                <td>2016-01-01</td>
                <td>2016-01-01</td>
              </tr>
              <tr>
                <td>2</td>
                <td>XYZ</td>
                <td>2016-01-01</td>
                <td>2016-01-01</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default UserIndex;
