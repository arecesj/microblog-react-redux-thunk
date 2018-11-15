import React, { Component } from 'react';
import PostForm from './PostForm';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
    // bind to functions here
  }

  render() {
    return (
      <div className="NewPost">
        <PostForm {...this.props} createPost={this.props.createPost} />
      </div>
    );
  }
}

export default NewPost;
