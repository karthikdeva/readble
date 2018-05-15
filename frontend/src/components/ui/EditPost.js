import React, { Component } from "react";

export default class EditPost extends Component {
  componentDidMount() {
    if (this.props.post) {
      this.setState({
        id: this.props.post.id,
        title: this.props.post.title,
        body: this.props.post.body
      });
    }
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.updatePost(this.state);
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    if (!this.props.post || !this.state) return <div />;
    const { author, category } = this.props.post;
    return (
      <div className="edit-post">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="title"
              label="Title"
              onChange={this.handleChange("title")}
              value={this.state.title}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="body"
              label="Body"
              placeholder="Body"
              value={this.state.body}
              onChange={this.handleChange("body")}
                        />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              label="Author"
              value={author}
              disabled
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              label="Category"
              value={category}
              disabled
            />
          </div>
          <div className="form-group">
            <button type="Submit" className="btn btn-primary">
              Update
            </button>
            <button
              type="Submit"
              className="btn btn-danger"
              onClick={() => this.props.cancelEdit()}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}
