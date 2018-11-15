import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
// import { NavLink, withRouter } from 'react-router-dom';
import Jumbotron from './component/Jumbotron';
// import Home from './container/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron />
        <Routes />
      </div>
    );
  }
}

export default App;
