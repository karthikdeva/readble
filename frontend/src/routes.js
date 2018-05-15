import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import PostsContainer from "./components/containers/PostsContainer";
import PostDetails from "./components/containers/PostDetails";
import CreatePost from "./components/containers/CreatePost";
import PageNotFound from "./components/ui/PageNotFound";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={PostsContainer} />
        <Route exact path="/:category?" component={PostsContainer} />
        <Route exact path="/post/create" component={CreatePost} />
        <Route exact path="/:category/:id" component={PostDetails} />
        <Route component={PageNotFound} />
      </Switch>
    );
  }
}
