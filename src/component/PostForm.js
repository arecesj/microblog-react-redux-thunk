import React, { Component } from 'react';

class PostForm extends Component {
  static defaultProps = {
    postDetails: { title: '', description: '', body: '', comments: [] }
  };

  constructor(props) {
    super(props);
    console.log('post form', props);
    this.state = {
      title: this.props.postDetails.title,
      description: this.props.postDetails.description,
      body: this.props.postDetails.body,
      comments: this.props.postDetails.comments
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.handleSubmit(this.state);
  }

  render() {
    return (
      <div className="PostForm">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="PostForm-title">Title: </label>
            <input
              type="text"
              id="PostForm-title"
              name="title"
              value={this.state.title}
              placeholder={this.props.postDetails.title}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="PostForm-description">Description: </label>
            <input
              type="text"
              id="PostForm-description"
              name="description"
              value={this.state.description}
              placeholder={this.props.postDetails.description}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="PostForm-body">Body: </label>
            <textarea
              type="text"
              id="PostForm-body"
              name="body"
              rows="3"
              value={this.state.body}
              placeholder={this.props.postDetails.body}
              onChange={this.handleChange}
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
