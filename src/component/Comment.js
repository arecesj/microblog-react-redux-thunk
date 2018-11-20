import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);

    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  handleDeleteComment(evt) {
    evt.preventDefault();
    this.props.deleteComment(this.props.comment.commentId, this.props.postId);
  }
  render() {
    console.log(this.props);
    return (
      <div className="Comment">
        {this.props.comment.commentText}
        <button onClick={this.handleDeleteComment}>X</button>
      </div>
    );
  }
}

export default Comment;
