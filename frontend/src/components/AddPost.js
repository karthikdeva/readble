import React from "react"
import {Link} from 'react-router-dom'
// const addNewPost = () => {     // id: post.id, timestamp: post.timestamp,
// title: post.title, body: post.body,     // author: post.author, category:
// post.category, }
const AddPost = () => {

    return (
        <form className="container add-post">
            <div className="form-group">
                <Link className="btn btn-primary" to="/">
                    Home</Link>
            </div>  
            <div className="form-group">
                <input type="text" className="form-control" name="author" placeholder="author"/>
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    name="category"
                    placeholder="category"/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" name="title" placeholder="title"/>
            </div>
            <div className="form-group">
                <textarea className="form-control" name="body" placeholder="Description"/>
            </div>
            <div className="form-group">
                <button className="btn btn-primary">Post</button>
                <button className="btn btn-default">Clear</button>

            </div>
        </form>
    )
}

export default AddPost;