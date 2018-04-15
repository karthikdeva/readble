import React from "react"
import {connect} from 'react-redux'
import serializeForm from "form-serialize"
import {addComment, ADD_COMMENT} from '../actions/index'

class AddComment extends React.Component {

    state = {
        displayErrors: false
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (!event.target.checkValidity()) {
            this.setState({displayErrors: true});
            return;
        }
        this.setState({displayErrors: false});
        const val = {
            id: Math.floor(Math.random() * 10000000),
            timestamp: Date.now(),
            author: this.props.post.author,
            parentId: this.props.post.id
        };

        let formData = serializeForm(event.target, {hash: true});
        formData = {
            ...formData,
            ...val
        };
        this
            .props
            .addComment(formData, ADD_COMMENT);
            event.target.reset();

    };
  

    render() {
        return (
            <div className="add-comment">
                <form
                    name="formComment"
                    className={this.state.displayErrors
                    ? 'displayErrors container add-post'
                    : 'input-group'}
                    onSubmit={this.handleSubmit}
                    noValidate>
                    <textarea
                        className="form-control textarea"
                        placeholder="Write a comment"
                        id="body"
                        name="body"
                        rows="1"></textarea>
                    <div className="input-group-append">
                        <button className="btn">Send</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addComment: (data, action) => {
        dispatch(addComment(data, action))
    }

});
export default connect(null, mapDispatchToProps)(AddComment);
