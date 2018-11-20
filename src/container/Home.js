import React, { Component } from 'react';
import BlogList from '../component/BlogList';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h3>
          Welcome to Microblog, our innovative site for communicating on the
          information superhighway.
        </h3>
        <BlogList posts={this.props.posts} />
      </div>
    );
  }
}

export default Home;
