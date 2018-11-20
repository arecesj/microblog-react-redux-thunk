import React, { Component } from 'react';
import PostForm from './PostForm';
// import { slugify } from 'slugify';

var slugify = require('slugify');

class NewPost extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSubmit(post) {
    let postId = slugify(post.title);
    console.log('new post:', post);
    this.props.createPost(post, postId);
    this.props.history.push('/');
  }

  handleCancel(evt) {
    evt.preventDefault();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="NewPost">
        <PostForm
          {...this.props}
          handleSubmit={this.handleSubmit}
          handleCancel={this.handleCancel}
        />
      </div>
    );
  }
}

export default NewPost;
