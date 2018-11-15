import React, { Component } from 'react';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      body: '',
      comments: [],
      isCreating: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // add function to toggle isCreating -> means user is editing post

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createPost(this.state);
    this.props.history.push('/');
  }

  // add onclick to Save/Cancel buttons
  render() {
    return (
      <div className="PostForm">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              id="title"
              name="title"
              value={this.state.title}
              placeholder={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description: </label>
            <input
              type="text"
              id="description"
              name="description"
              value={this.state.description}
              placeholder={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Body: </label>
            <textarea
              type="text"
              id="body"
              name="body"
              rows="3"
              value={this.state.body}
              placeholder={this.state.body}
              onChange={this.handleChange}
            />
          </div>
          <button>Save</button>
          <button>Cancel</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
