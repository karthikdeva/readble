import React, { Component } from "react";

export default class EditComment extends Component {
  componentWillMount = () => {
    if (this.props.comment)
      this.setState({
        body: this.props.comment.body,
        id: this.props.comment.id
      });
  };

  constructor() {
    super();
    this.state = {
      body: ""
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.updateComment({
      id: Math.floor(Math.random() * 10000000),
      ...this.state
    });
  };

  render() {
    const { comment } = this.props;
    if (!comment) return <div />;
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Comment"
            className="form-control"
            value={this.state.body}
            onChange={this.handleChange("body")}
          />
        </div>
        <div className="form-group">
          <button type="Submit" className="btn btn-primary">
            Update
          </button>
          <button
            type="Submit"
            className="btn btn-primary"
            onClick={() => this.props.cancelEdit()}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}
