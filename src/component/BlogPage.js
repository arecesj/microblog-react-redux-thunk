import React, { Component } from 'react';
import PostForm from './PostForm';

class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };

    this.switchToEdit = this.switchToEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  switchToEdit() {
    this.setState({ isEditing: true });
  }

  handleEdit(evt) {
    evt.preventDefault();
    this.props.editPost(this.props.match.params.postId);
    // this.props.history.push(`/${this.props.match.params.postId}`);
    this.setState({ isEditing: false });
  }

  handleDelete(evt) {
    evt.preventDefault();
    this.props.deletePost(this.props.match.params.postId);
    this.props.history.push('/');
  }

  render() {
    let story = this.props.posts.filter(
      post => post.postId === this.props.match.params.postId
    )[0];

    return story === undefined ? (
      <div />
    ) : (
      <div className="BlogPage">
        {!this.state.isEditing ? (
          <div>
            <h1>{story.title}</h1>
            <h3>{story.description}</h3>
            <h4>{story.body}</h4>
            <button onClick={this.switchToEdit}>Edit</button>
            <button onClick={this.handleDelete}>Delete</button>
          </div>
        ) : (
          <PostForm story={story} />
        )}
      </div>
    );
  }
}

export default BlogPage;
