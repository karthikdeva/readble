import React from 'react';
import AddComment from './AddComment'
import * as FontAwesome from 'react-icons/lib/fa'
import {camelCaseToSentanceCase} from '../utils/'
const Post = (data) => {
    if (data.posts.length === 0) {
        return <p>No Post found.</p>
    }
   
    return (
        <div className="posts">
            {data
                .posts
                .map((post) => (
                    <div key={post.id} className="card">
                        <div className="card-header">{post.title}
                        </div>
                        <div className="card-block row">
                            <div className="col-10">
                                <div className="title-row">
                                    <h6 className="text-muted float-left">Author: {camelCaseToSentanceCase(post.author)}</h6>
                                </div>
                                <p className="card-text">{post.body} {post.category}</p>
                                <button type="button" className="btn p-0 btn-link">{post.commentCount} Comments</button>
                            </div>
                            <div className="col-2">
                                <label className="float-right vote-icons">
                                    <div className="btn-group-vertical">
                                        <FontAwesome.FaCaretUp size={40}/>
                                        <span className="text-center">{post.voteScore}</span>
                                        <FontAwesome.FaCaretDown size={40}/>
                                    </div>
                                </label>
                            </div>
                        </div>
                        {<div className="card-footer">
                            <AddComment></AddComment>
                        </div>}
                    </div>
                ))
}
        </div>
    )

}

export default Post;