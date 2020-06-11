import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import toastr from 'toastr';

class BlogComponent extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 text-center">
          <div className="table-responsive">
            <table className="table table-bordered table-striped table-hover">
              <thead>
                <tr>
                  <td>SL</td>
                  <td>Title</td>
                  <td>Status</td>
                  <td>Created By</td>
                  <td>Created At</td>
                  <td>Updated At</td>
                </tr>
              </thead>
              <tbody>{this.renderAllBlog()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  renderAllBlog() {
    if (this.props.allBlog.length) {
      return this.props.allBlog.map(function (blog, index) {
        return (
          <tr key={blog._id}>
            <td>{index + 1}</td>
            <td>{blog.title}</td>
            <td>{blog.status}</td>
            <td>{blog._createdBy.emailAddress}</td>
            <td>{moment(blog.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
            <td>{moment(blog.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
          </tr>
        );
      });
    } else {
      return null;
    }
  }
}

export default BlogComponent;
