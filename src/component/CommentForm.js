import React, { Component } from 'react';

class CommentForm extends Component {
  render() {
    return (
      <div className="CommentForm">
        <form onSubmit={this.props.handleSubmitComment}>
          <label htmlFor="comment">Comment: </label>
          <input
            type="text"
            id="comment"
            name="comment"
            value={this.props.commentDetails.comment}
            onChange={this.props.handleCommentChange}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default CommentForm;
