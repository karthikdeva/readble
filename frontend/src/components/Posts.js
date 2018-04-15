import React from 'react';
import AddComment from './AddComment'
import {connect} from 'react-redux'
import * as FontAwesome from 'react-icons/lib/fa'
import {camelCaseToSentanceCase} from '../utils/'
import {postVote} from '../actions/index'

class Post extends React.Component {

    postVote = (postId, voteType) => {
        this
            .props
            .postVote(postId, voteType);

    }

    render() {
        const {posts} = this.props;
        const UP_VOTE = 'upVote';
        const DOWN_VOTE = 'downVote';
         
        return (
            <div className="posts">
                {posts.map((post) => (
                    <div key={post.id} className="card">
                        <div className="card-header">{post.title}
                        </div>
                        <div className="card-block row">
                            <div className="col-10">
                                <h6 className="text-muted card-title">Author: {camelCaseToSentanceCase(post.author)}</h6>
                                <p className="card-text">{post.body} {post.category}</p>
                                <button type="button" className="btn p-0 btn-link">{post.commentCount}
                                    Comments</button>
                            </div>
                            <div className="col-2">
                                <label className="float-right vote-icons">
                                    <div className="btn-group-vertical">
                                        <FontAwesome.FaCaretUp
                                            size={40}
                                            onClick={() => this.postVote(post.id, UP_VOTE)}/>
                                        <span className="text-center">{post.voteScore}</span>
                                        <FontAwesome.FaCaretDown
                                            size={40}
                                            onClick={() => this.postVote(post.id, DOWN_VOTE)}/>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="card-footer">
                            <AddComment post={post}></AddComment>
                        </div>
                    </div>
                ))
}
            </div>
        )
    }
}

const mapStateToProps = ({reducer}) => {
    const {posts} =  reducer;
    return {posts: posts}
  
  }
const mapDispatchToProps = dispatch => ({
    postVote: (postId, voteType) => {
        dispatch(postVote(postId, voteType))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);