import React, { Component } from 'react';
import PostForm from './PostForm';

class BlogPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.post,
      isEdit: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  toggleEdit(evt) {
    evt.preventDefault();
    this.setState({ isEdit: true });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.editPost(this.state);
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
    return (
      <div className="BlogPage">
        {!this.state.isEdit ? (
          <div>
            <h1>{this.state.title}</h1>
            <h3>{this.state.description}</h3>
            <h4>{this.state.body}</h4>
            <button onClick={this.toggleEdit}>Edit</button>
            <button onClick={this.handleDelete}>Delete</button>
            <hr />
            <h3>Commentos: </h3>
          </div>
        ) : (
          <PostForm
            {...this.props}
            postDetails={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleCancel={this.handleCancel}
          />
        )}
      </div>
    );
  }
}

export default BlogPage;
