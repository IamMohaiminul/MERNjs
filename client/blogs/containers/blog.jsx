import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getAllBlog from '../actions/getAllBlog';
import BlogComponent from '../components/blog';

class BlogContainer extends Component {
  componentDidMount() {
    const { getBlogs } = this.props;
    getBlogs();
  }

  render() {
    const { blogs } = this.props;
    return <BlogComponent blogs={blogs} />;
  }
}

BlogContainer.propTypes = {
  getBlogs: PropTypes.func.isRequired,
  blogs: PropTypes.array.isRequired,
};

// Get apps store and pass it as props to BlogContainer
//  > whenever store changes, the BlogContainer will automatically re-render
// "store.allBlog" is set in reducers.js
const mapStateToProps = (store) => ({
  blogs: store.allBlog,
});

// Get actions and pass them as props to to BlogContainer
//  > now BlogContainer has this.props.getAllBlog
const matchDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getBlogs: getAllBlog,
    },
    dispatch,
  );

// We don't want to return the plain BlogContainer (component) anymore,
// we want to return the smart Container
//  > BlogContainer is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(BlogContainer);
