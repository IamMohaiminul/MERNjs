import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class BlogComponent extends Component {
  renderAllBlog() {
    const { blogs } = this.props;
    if (blogs.length) {
      return blogs.map((blog, idx) => {
        return (
          <tr key={idx.toString()}>
            <td>{idx + 1}</td>
            <td>{blog.title}</td>
            <td>{blog.description}</td>
            <td>{blog._createdBy.fullName}</td>
            <td>{moment(blog.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
            <td>
              {blog.status.toLowerCase() === 'active' ? (
                <i className="fa fa-eye text-success" />
              ) : (
                <i className="fa fa-eye-slash text-danger" />
              )}
            </td>
          </tr>
        );
      });
    }
    return (
      <tr>
        <td colSpan="6" className="text-center">
          <h1 className="msg-h1">Currently, there is no blog!</h1>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <div className="row">
        <table className="table table-hover">
          <thead>
            <tr className="table-active">
              <th scope="col">No</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Author</th>
              <th scope="col">Last Update At</th>
              <th scope="col">
                <i className="fa fa-info-circle text-info" />
              </th>
            </tr>
          </thead>
          <tbody>{this.renderAllBlog()}</tbody>
        </table>
      </div>
    );
  }
}

BlogComponent.propTypes = {
  blogs: PropTypes.array.isRequired,
};

export default BlogComponent;
