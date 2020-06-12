import React, { Component } from 'react';

class FooterComponent extends Component {
  render() {
    return (
      <footer id="footer" className="fixed-bottom text-center">
        <div className="row">
          <div className="col-lg-12">
            <p>
              <a href="https://mern.js.org/" target="_blank">
                MERNjs
              </a>{' '}
              &copy; 2020
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterComponent;
