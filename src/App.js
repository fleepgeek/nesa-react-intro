import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import PostList from "./components/PostList/PostList";
import PostDetail from "./components/PostDetail/PostDetail";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/about" render={() => <h1>About Us</h1>} />
          <Route path="/posts/:id" component={PostDetail} />
          <Route path="/posts" component={PostList} />
          <Route path="/" exact render={() => <h1>Welcome</h1>} />
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
