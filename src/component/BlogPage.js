import React, { Component } from 'react';
import PostForm from './PostForm';
import CommentContainer from './CommentContainer';

class BlogPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  toggleEdit(evt) {
    evt.preventDefault();
    this.setState({ isEdit: true });
  }

  handleSubmit(post) {
    post.postId = this.props.post.postId;
    console.log('blog page finished editing:', post);
    this.props.editPost(post);
    this.setState({ isEdit: false });
  }

  handleCancel(evt) {
    evt.preventDefault();
    this.setState({ isEdit: false });
  }

  handleDelete(evt) {
    evt.preventDefault();
    this.props.deletePost(this.props.match.params.postId);
    this.props.history.push('/');
  }

  render() {
    console.log('blog page', this.props);
    return (
      <div className="BlogPage">
        {!this.state.isEdit ? (
          <div>
            <h1>{this.props.post.title}</h1>
            <h3>{this.props.post.description}</h3>
            <h4>{this.props.post.body}</h4>
            <button onClick={this.toggleEdit}>Edit</button>
            <button onClick={this.handleDelete}>Delete</button>
            <hr />
            <h3>Commentos: </h3>
          </div>
        ) : (
          <PostForm
            {...this.props}
            postDetails={this.props.post}
            handleSubmit={this.handleSubmit}
            handleCancel={this.handleCancel}
          />
        )}
        <hr />
        <CommentContainer
          createComment={this.props.createComment}
          postId={this.props.post.postId}
          comments={this.props.post.comments}
          deleteComment={this.props.deleteComment}
        />
      </div>
    );
  }
}

export default BlogPage;
