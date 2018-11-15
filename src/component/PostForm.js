import React, { Component } from 'react';

class PostForm extends Component {
  // constructor(props) {
  //   super(props);

  // }

  // add onclick to Save/Cancel buttons
  render() {
    return (
      <div className="PostForm">
        <form onSubmit={this.props.handleSubmit}>
          <div className="form-group">
            <label htmlFor="PostForm-title">Title: </label>
            <input
              type="text"
              id="PostForm-title"
              name="title"
              value={this.props.postDetails.title}
              placeholder={this.props.postDetails.title}
              onChange={this.props.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="PostForm-description">Description: </label>
            <input
              type="text"
              id="PostForm-description"
              name="description"
              value={this.props.postDetails.description}
              placeholder={this.props.postDetails.description}
              onChange={this.props.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="PostForm-body">Body: </label>
            <textarea
              type="text"
              id="PostForm-body"
              name="body"
              rows="3"
              value={this.props.postDetails.body}
              placeholder={this.props.postDetails.body}
              onChange={this.props.handleChange}
            />
          </div>
          <button>Save</button>
          <button onClick={this.props.handleCancel}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
