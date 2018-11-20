import React, { Component } from 'react';
import CommentForm from './CommentForm';
// import uuid from 'uuid/v4';
// import { slugify } from 'slugify';

import Comment from './Comment';
var slugify = require('slugify');

class CommentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      commentId: ''
    };

    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSubmitComment = this.handleSubmitComment.bind(this);
    // this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  handleCommentChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmitComment(evt) {
    evt.preventDefault();
    let newComment = {
      // commentId: uuid(),
      commentId: slugify(this.state.comment),
      commentText: this.state.comment
    };
    this.props.createComment(newComment, this.props.postId);
    this.setState({
      comment: ''
    });
  }

  render() {
    console.log('here are my props: ', this.props);
    let comments;

    console.log('comments are', this.props.comments);

    if (this.props.comments === undefined) {
      comments = <p>No Comments here, yet!</p>;
    } else {
      comments = (
        <ul>
          {this.props.comments.map(each => {
            return (
              <li key={each.commentId}>
                <Comment
                  postId={this.props.postId}
                  comment={each}
                  deleteComment={this.props.deleteComment}
                />
              </li>
            );
          })}
        </ul>
      );
    }
    return (
      <div>
        {comments}
        <CommentForm
          handleSubmitComment={this.handleSubmitComment}
          handleCommentChange={this.handleCommentChange}
          commentDetails={this.state}
        />
      </div>
    );
  }
}

export default CommentContainer;
