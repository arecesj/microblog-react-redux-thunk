import React, { Component } from 'react';
import PostForm from './PostForm';

class NewPost extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSubmit(post) {
    console.log('new post:', post);
    this.props.createPost(post);
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
