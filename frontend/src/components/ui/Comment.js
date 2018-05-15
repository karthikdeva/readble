import React, { Component } from "react";
import * as FontAwesome from "react-icons/lib/fa";
import { getPostedTime } from "../../utils";
import EditComment from "../containers/EditComment";

export default class Comment extends Component {
  render() {
    const {
      comment,
      upVoteComment,
      downVoteComment,
      deleteComment,
      editComment,
      edit
    } = this.props;
    return (
      <div className="media row">
        {comment && (
          <div key={comment.id} className="col">
            {!edit && (
              <div className="media-body row">
                <div className="col">
                  <p className="float-right">
                    {" "}
                    {getPostedTime(comment.timestamp)}
                  </p>
                  <h4 className="media-heading">{comment.body}</h4>
                  <p>
                    {comment.voteScore}
                    Votes by {comment.author}
                  </p>
                  <FontAwesome.FaThumbsUp
                    size={20}
                    onClick={() => upVoteComment(comment.id)}
                  />
                  <FontAwesome.FaThumbsDown
                    size={20}
                    onClick={() => downVoteComment(comment.id)}
                  />
                  <div className="float-right">
                    <FontAwesome.FaTrash
                      size={20}
                      onClick={() => deleteComment(comment.id)}
                    />
                    <FontAwesome.FaEdit
                      size={20}
                      onClick={e => editComment(comment)}
                    />
                  </div>
                </div>
              </div>
            )}
            {edit && <EditComment comment={comment} />}
          </div>
        )}
      </div>
    );
  }
}
