import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Jumbotron extends Component {
  constructor(props) {
    super(props);
    this.state = { home: true };
  }

  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Microblog</h1>
        <p className="lead">Get in the Rithm of blogging!</p>
        <Link to="/">Blog</Link>
        <Link to="/new">Add a new post</Link>
      </div>
    );
  }
}

export default Jumbotron;
