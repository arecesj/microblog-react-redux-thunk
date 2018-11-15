import React, { Component } from 'react';
import BlogCard from './BlogCard';

class BlogList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { posts: [] };
  //   // bind to functions here
  // }

  render() {
    const post = this.props.posts.map(post => <BlogCard post={post} />);
    return (
      <div className="bloglist">
        <div className="row">{post}</div>
      </div>
    );
  }
}

export default BlogList;
