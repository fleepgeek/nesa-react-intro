import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import PostList from "./components/PostList/PostList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <PostList isPaginated="false" />
      </div>
    );
  }
}

export default App;
