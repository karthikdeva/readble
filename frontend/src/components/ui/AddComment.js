import React, {Component} from "react";

export default class AddComment extends Component {
  initialState = {
    body: "",
    author: ""
  };
  state = this.initialState;

  handleChange = name => event => {
    this.setState({[name]: event.target.value});
  };

  addComment = e => {
    e.preventDefault();
    this.reset();
    this
      .props
      .addComment({
        id: Math.floor(Math.random() * 10000000),
        parentId: this.props.postId,
        ...this.state
      });
  };

  reset = () => {
    this.setState(this.initialState);
  };

  render() {
    return (
      <div className="add-comment">
        <form onSubmit={this.addComment} className="add-comment-form">
          <div className="form-group">
            <label>Author</label>
            <input
              type="text"
              className="form-control"
              id="author"
              placeholder="Author"
              value={this.state.author}
              onChange={this.handleChange("author")}/>
          </div>
          <div className="form-group">
            <label>Comment</label>
            <textarea
              id="body"
              className="form-control"
              placeholder="Comment"
              value={this.state.body}
              onChange={this.handleChange("body")}/>
          </div>
          <div className="form-group">
            <button type="Submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
