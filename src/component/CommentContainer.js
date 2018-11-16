import React, { Component } from 'react';
import CommentForm from './CommentForm';
import uuid from 'uuid/v4';
import Comment from './Comment';

class CommentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };
    // this.createComment = this.createComment.bind(this);
    // this.removeComment = this.removeComment.bind(this);
    // this.toggleCompleted = this.toggleCompleted.bind(this);

    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSubmitComment = this.handleSubmitComment.bind(this);
  }

  // createComment(data) {
  //   let newComment = { ...data, id: uuid() };
  //   this.setState(st => ({
  //     comments: [...st.comments, newComment]
  //   }));
  // }

  handleCommentChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmitComment(evt) {
    evt.preventDefault();
    let newComment = {
      commentId: uuid(),
      commentText: this.state.comment
    };
    this.props.createComment(newComment, this.props.postId);
    this.setState({
      comment: ''
    });
  }

  // removeComment(id) {
  //   this.setState(st => ({
  //     comments: st.comments.filter(comment => comment.id !== id)
  //   }));
  // }

  render() {
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
