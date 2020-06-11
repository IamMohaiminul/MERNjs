import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BlogComponent from '../components/blog.jsx';

import { getAllBlog } from '../actions/getAllBlog.js';

class BlogContainer extends Component {
  componentWillMount() {
    this.props.getAllBlog();
  }

  render() {
    return <BlogComponent allBlog={this.props.allBlog} />;
  }
}

// Get apps store and pass it as props to BlogContainer
//  > whenever store changes, the BlogContainer will automatically re-render
// "store.allBlog" is set in reducers.js
function mapStateToProps(store) {
  return {
    allBlog: store.allBlog,
  };
}

// Get actions and pass them as props to to BlogContainer
//  > now BlogContainer has this.props.getAllBlog
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getAllBlog: getAllBlog,
    },
    dispatch,
  );
}

// We don't want to return the plain BlogContainer (component) anymore,
// we want to return the smart Container
//  > BlogContainer is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(BlogContainer);
