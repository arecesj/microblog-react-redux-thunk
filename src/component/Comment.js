import React, { Component } from 'react';

class Comment extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Comment">
        {this.props.comment.commentText}
        <button onClick={this.props.deleteComment}>X</button>
      </div>
    );
  }
}

export default Comment;
