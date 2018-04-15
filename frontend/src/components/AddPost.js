import React from "react"
import {connect} from 'react-redux'
import serializeForm from "form-serialize"
import {Link} from 'react-router-dom'
import {addPost, ADD_POST} from '../actions/index'

class AddPost extends React.Component {

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
            timestamp: Date.now()
        };
        let formData = serializeForm(event.target, {hash: true});
        formData = {
            ...formData,
            ...val
        };
        this
            .props
            .addPost(formData, ADD_POST);
        event
            .target
            .reset();

    };

    render() {
        return (
            <form
                className={this.state.displayErrors
                ? 'displayErrors container add-post'
                : 'container add-post'}
                onSubmit={this.handleSubmit}
                noValidate>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        name="author"
                        placeholder="Author"
                        required/>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        name="category"
                        placeholder="Category"
                        required/>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        placeholder="Title"
                        required/>
                </div>
                <div className="form-group">
                    <textarea className="form-control" name="body" placeholder="Description"/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Submit</button>
                    <Link className="btn btn-danger" to="/">
                        Cancel</Link>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addPost: (data, action) => {
        dispatch(addPost(data, action))
    }
});
export default connect(null, mapDispatchToProps)(AddPost);