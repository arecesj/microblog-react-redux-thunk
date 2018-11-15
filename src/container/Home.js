import React, { Component } from 'react';
import BlogList from '../component/BlogList';
import NewPost from '../component/NewPost';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <BlogList posts={this.props.posts} />
      </div>
    );
  }
}

export default Home;
