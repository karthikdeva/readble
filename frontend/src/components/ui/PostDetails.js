import React, { Component } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../ui/Breadcrumbs";

import EditPost from "../containers/EditPost";
import Comments from "../containers/Comments";
import AddComment from "../containers/AddComment";
import * as FontAwesome from "react-icons/lib/fa";
import { getPostedTime, camelCaseToSentanceCase } from "../../utils";
import PageNotFound from "./PageNotFound";

export default class PostDetails extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.postId);
  }

  viewPost = () => {
    if (this.props.post) {
      if (!this.props.post.id || this.props.post.error) return false;
      return true;
    }
    return false;
  };

  componentWillUnmount() {
    this.props.clearPost();
  }
  editPost = post => post && post.id === this.props.editPost.id;
  render() {
    const {
      post,
      upvote,
      downvote,
      deletePost,
      location,
      onEditPost
    } = this.props;
    console.log("PostDetails",this.props);
    return (
      <div className="post-details">
       {this.viewPost() && (
          <div className="container">
            {location.length !== 1 && (
              <Breadcrumbs category={this.props.category} />
            )}
            <div key={post.id} className="card">
              <div className="card-header">
                {post.title}{" "}
                <FontAwesome.FaEdit
                  size={20}
                  onClick={e => onEditPost(post)}
                  className="float-right"
                />
              </div>
              {this.props.editPost.id !== post.id && (
                <div className="card-block row">
                  <div className="col-10 d-flex justify-content-star">
                    <div className="col-2">
                      <img
                        src={`/img/${post.category}.png`}
                        className="img-rounded img-thumbnail"
                        alt={post.category}
                      />
                    </div>
                    <div className="col">
                      <h6 className="text-muted card-title">
                        Author: {camelCaseToSentanceCase(post.author)}
                      </h6>
                      <p className="card-text">{post.body}</p>

                      <p className="card-text">
                        Submitted {getPostedTime(post.timestamp)}
                        by {post.author}
                      </p>
                      <label className="p-0">
                        {post.commentCount}
                        Comments
                      </label>
                    </div>
                  </div>

                  <div className="col-2">
                    <label className="float-right vote-icons">
                      <div className="btn-group-vertical">
                        <FontAwesome.FaCaretUp
                          size={40}
                          onClick={() => upvote(post.id)}
                        />
                        <span className="text-center">{post.voteScore}</span>
                        <FontAwesome.FaCaretDown
                          size={40}
                          onClick={() => downvote(post.id)}
                        />
                      </div>
                    </label>
                  </div>
                </div>
              )}
              <div className="card-footer">
                {this.props.editPost.id === post.id && <EditPost post={post} />}

                <Link to="/">
                  <FontAwesome.FaTrash
                    size={20}
                    onClick={() => deletePost(post.id)}
                    className="float-right"
                  />
                </Link>
              </div>
            </div>
            <Comments />
            <AddComment />
          </div>
        )}
        {!this.viewPost() && <PageNotFound />}
      </div>
    );
  }
}
