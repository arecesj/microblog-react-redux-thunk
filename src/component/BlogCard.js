import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BlogCard extends Component {
  render() {
    console.log(this.props.post);
    return (
      <div className="BlogCard">
        <div className="col-lg">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <Link to={`/${this.props.post.postId}`}>
                  {this.props.post.title}
                </Link>
              </h5>
              <p className="card-text">{this.props.post.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogCard;
