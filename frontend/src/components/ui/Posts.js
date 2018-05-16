import React, {Component} from "react";
import {Link} from "react-router-dom";
import * as FontAwesome from "react-icons/lib/fa";
import EditPost from "../containers/EditPost";
import {getPostedTime, camelCaseToSentanceCase} from "../../utils";
import PageNotFound from "./PageNotFound";

export default class Posts extends Component {
  componentDidMount() {
    this
      .props
      .fetchPosts();
  }

  state = {
    editPost: false
  };
  editPost = post => post.id === this.props.editPost.id;

  render() {
    const {
      posts,
      upvote,
      downvote,
      deletePost,
      onEditPost
    } = this.props;

    return (
      <div className="posts">
        {posts.length > 0 && posts.map(post => (
          <div key={post.id} className="card">
            <div className="card-header">
              <Link to={`${post.category}/${post.id}`}>{post.title}</Link>
              <FontAwesome.FaEdit
                size={20}
                onClick={e => onEditPost(post)}
                className="float-right"/>
            </div>
            {this.props.editPost.id !== post.id && (
              <div className="card-block row">
                <div className="col-10 d-flex justify-content-star">
                  <div className="col-2">
                    <img
                      src={`/img/${post.category}.png`}
                      className="img-rounded img-thumbnail"
                      alt={post.category}/>
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
                    <Link to={`${post.category}/${post.id}`}>
                      {" "}
                      <label className="p-0">
                        {post.commentCount}
                        Comments{" "}
                      </label>
                    </Link>
                  </div>
                </div>

                <div className="col-2">
                  <label className="float-right vote-icons">
                    <div className="btn-group-vertical">
                      <FontAwesome.FaCaretUp size={40} onClick={() => upvote(post.id)}/>
                      <span className="text-center">{post.voteScore}</span>
                      <FontAwesome.FaCaretDown size={40} onClick={() => downvote(post.id)}/>
                    </div>
                  </label>
                </div>
              </div>
            )}

            <div className="card-footer">
              <FontAwesome.FaTrash
                size={20}
                onClick={() => deletePost(post.id)}
                href="/"
                className="float-right"/>
            </div>

            {this.props.editPost.id === post.id && <EditPost post={post}/>}
          </div>
        ))}
          {!posts.length && <PageNotFound />}
      </div>
    );
  }
}
