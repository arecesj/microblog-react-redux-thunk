import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './container/Home';
import NewPost from './component/NewPost';
import BlogPage from './component/BlogPage';
// import BlogCard from './component/BlogCard';
import uuid from 'uuid/v4';
// import {
//   createPost,
//   deletePost,
//   edit,
//   createComment,
//   deleteComment
// } from './actionCreators';
// import { connect } from 'react-redux';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };

    this.createPost = this.createPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.editPost = this.editPost.bind(this);
  }

  createPost(data) {
    let newPost = { ...data, postId: uuid() };
    this.setState(() => ({
      posts: [...this.state.posts, newPost]
    }));
  }

  deletePost(id) {
    let updatedPosts = this.state.posts.filter(post => post.postId !== id);
    this.setState({
      posts: [...updatedPosts]
    });
  }

  // figure out what gets put in state to get updated
  editPost(id) {
    let editPosts = this.state.posts.filter(post => post.postId !== id);
    this.setState({
      posts: [...editPosts]
    });
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/new"
          render={props => <NewPost {...props} createPost={this.createPost} />}
        />
        <Route
          exact
          path="/"
          render={props => <Home {...props} posts={this.state.posts} />}
        />
        <Route
          exact
          path="/:postId"
          render={props => (
            <BlogPage
              {...props}
              posts={this.state.posts}
              deletePost={this.deletePost}
              editPost={this.editPost}
            />
          )}
        />
        <Redirect to="/" />
      </Switch>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     posts: state.posts
//   };
// }

// export default connect(
//   mapStateToProps,
//   {
//     createPost,
//     deletePost,
//     edit,
//     createComment,
//     deleteComment
//   }
// )(Routes);

export default Routes;
