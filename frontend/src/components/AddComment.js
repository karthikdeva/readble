import React from "react"

const AddComment = () => {

    return (
        <div className="add-comment">
            <div className="input-group">
                <textarea className="form-control textarea" placeholder="Write a comment" id="test" rows="1"></textarea>
                <div className="input-group-append">
                    <button className="btn" type="button">Send</button>
                </div>
            </div>
        </div>
    )
}

export default AddComment;