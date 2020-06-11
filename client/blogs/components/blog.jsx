import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import toastr from 'toastr';

class BlogComponent extends Component {
  render() {
    return <div className="row">{this.renderAllBlog()}</div>;
  }

  renderAllBlog() {
    if (this.props.allBlog.length) {
      return this.props.allBlog.map(function (blog, index) {
        return (
          <div className="col-xs-6 text-center" key={blog._id}>
            <h4>{blog.title}</h4>
            <small>
              {blog._createdBy.fullName} ({blog._createdBy.emailAddress})
              <br />
              {moment(blog.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
              &nbsp;|&nbsp;
              {moment(blog.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}
            </small>
            <p className="text-justify">{blog.description}</p>
          </div>
        );
      });
    } else {
      return (
        <div className="col-xs-offset-3 col-xs-6 text-center">
          <p>Currently, There is no blog.</p>;
        </div>
      );
    }
  }
}

export default BlogComponent;
