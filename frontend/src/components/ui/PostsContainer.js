import React, { Component } from "react";
import * as FontAwesome from "react-icons/lib/fa";
import { Link } from "react-router-dom";
import PostCategories from "../containers/PostCategories";
import Posts from "../containers/Posts";
import SortOptions from "../containers/SortOptions";
import Breadcrumbs from "../ui/Breadcrumbs";

export default class PostsContainer extends Component {
  componentWillMount() {
    this.props.getCategories();
    //reset edit post and comment on route change
    this.props.history.listen(() => {
      this.props.cancelEdit();
    });
  }

  componentDidUpdate() {
    if (this.props.category) {
      this.props.setCategory(this.props.category);
    } else {
      this.props.setCategory("all");
    }
  }
  render() {
    const { location } = this.props;
    return (
      <div className="container home">
        {location.length !== 1 && (
          <Breadcrumbs category={this.props.category} />
        )}
        {location.length === 1 && (
          <div className="row justify-content-end post-header">
            <div className="col-2">
              <Link to="/post/create" className="create-post">
                <button className="btn btn-primary btn-block">
                  <FontAwesome.FaPlus size={20} />
                  Add a post
                </button>
              </Link>
            </div>
            <div className="col-3">
              <SortOptions />
            </div>
          </div>
        )}
        <div className="row">
          {location.length === 1 && (
            <div className="col-2">
              <PostCategories />
            </div>
          )}
          <div className="col">
            <Posts location={location} />
          </div>
        </div>
      </div>
    );
  }
}
