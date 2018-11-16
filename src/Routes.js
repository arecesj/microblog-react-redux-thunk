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
      posts: [
        {
          postId: 1,
          title: 'test1',
          description: 'testing this',
          body: 'hola',
          comments: []
        }
      ]
    };

    this.createPost = this.createPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.createComment = this.createComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
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

  editPost(data) {
    console.log('edit post', data);
    let updatedPosts = this.state.posts.map(post =>
      +post.postId === +data.postId ? data : post
    );
    this.setState({
      posts: [...updatedPosts]
    });
  }

  createComment(data, postId) {
    console.log('createcomment: this is my data: ', data, postId);
    let updatedPosts = this.state.posts.map(post =>
      +post.postId === +postId
        ? { ...post, comments: [...post.comments, data] }
        : post
    );
    console.log('createcomment: updated this post: ', updatedPosts);
    this.setState({ posts: updatedPosts }, () => {
      console.log('new created comment: ', this.state);
    });
    debugger;
  }

  deleteComment(commentId, postId) {
    let updatedPosts = this.state.posts.map(post =>
      +post.postId === +postId
        ? post.comments.map((comment, idx) =>
            comment.commentId === commentId ? comment.splice(idx, 1) : comment
          )
        : post
    );
    this.setState({ posts: [...updatedPosts] });
  }

  findPostById(id) {
    console.log('find', this.state.posts, id);
    let post = this.state.posts.find(post => +post.postId === +id);
    console.log('found post', post);
    return post;
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Home {...props} posts={this.state.posts} />}
        />
        <Route
          exact
          path="/new"
          render={props => <NewPost {...props} createPost={this.createPost} />}
        />
        <Route
          exact
          path="/:postId"
          render={routerProps => (
            <BlogPage
              {...routerProps}
              post={this.findPostById(routerProps.match.params.postId)}
              deletePost={this.deletePost}
              editPost={this.editPost}
              createComment={this.createComment}
              deleteComment={this.deleteComment}
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
