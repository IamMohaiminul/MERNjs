import React, {Component} from 'react';

import Nav from '../components/nav.jsx';

export default class CoreLayout extends Component {
  render() {
    return (
      <div className="container">
        <h1 className='text-center'>Core Layout</h1>
        <Nav/> {this.props.children}
        <footer>
          <div className="text-center padder clearfix">
            <p>
              <small>
                <a href="https://github.com/IamMohaiminul/MERNjs">
                  A scaffolding of MERN stack
                </a>
                &copy; 2016
              </small>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
