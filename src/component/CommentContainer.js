import React, { Component } from 'react';
import CommentForm from './CommentForm';
import uuid from 'uuid/v4';
import Comment from './Comment';

class CommentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      completed: new Set([])
    };
    this.createComment = this.createComment.bind(this);
    this.removeComment = this.removeComment.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  createComment(data) {
    let newComment = { ...data, id: uuid() };
    this.setState(st => ({
      comments: [...st.comments, newComment]
    }));
  }

  removeComment(id) {
    this.setState(st => ({
      comments: st.comments.filter(comment => comment.id !== id)
    }));
  }

  render() {
    return (
      <div>
        <NewCommentForm createComment={this.createComment} />
        <ul>
          {this.state.comments.map(comment => {
            console.log('map', this.state.completed);
            return (
              <li key={comment.id}>
                <Comment
                  className={
                    this.state.completed.hcomment.id) ? 'completed' : ''
                  }
                  id={comment.id}
                  comment={comment.task}
                  removeComment={this.removeComment}
                  toggleCompleted={this.toggleCompleted}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CommentContainer;
