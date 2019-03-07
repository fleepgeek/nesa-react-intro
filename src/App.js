import React, { Component, Suspense, lazy  } from 'react';
import { Route, Switch } from "react-router-dom";

import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import PostDetail from "./components/PostDetail/PostDetail";

const PostList = lazy(() => import("./components/PostList/PostList"));

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/about" render={() => <h1>About Us</h1>} />
          <Route path="/posts/:id" component={PostDetail} />
          <Route path="/posts" render={() => (
            <Suspense fallback={<i className="fa fa-circle-o-notch fa-spin" style={{fontSize: "24px"}}></i>}>
              <PostList />
            </Suspense>
          )} />
          <Route path="/" exact render={() => <h1>Welcome</h1>} />
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
