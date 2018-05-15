import React, { Component } from "react";
import serializeForm from "form-serialize";
import { Link } from "react-router-dom";

export default class CreatePost extends Component {
  postCreate = false;
  initialState = {
    displayErrors: false
  };

  state = this.initialState;

  componentWillMount() {
    if (this.props.categories.length === 0) {
      this.props.getCategories();
    }
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  reset = () => {
    this.setState(this.initialState);
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!event.target.checkValidity()) {
      this.setState({ displayErrors: true });
      return;
    }
    this.setState({ displayErrors: false });
    const val = {
      id: Math.floor(Math.random() * 10000000),
      timestamp: Date.now()
    };
    let formData = serializeForm(event.target, { hash: true });
    formData = {
      ...formData,
      ...val
    };
    this.props.createPost(formData);
    event.target.reset();
  };

  render() {
    const { categories } = this.props;
    var options = categories.map(function(option) {
      return (
        <option key={option.name} value={option.name}>
          {option.name}
        </option>
      );
    });

    return (
      <form
        className={
          this.state.displayErrors
            ? "displayErrors container add-post"
            : "container add-post"
        }
        onSubmit={this.handleSubmit}
        noValidate
      >
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="author"
            placeholder="Author"
            required
          />
        </div>
        <div className="form-group">
          <select
            id="category"
            name="category"
            className="form-control"
            required
          >
            {options}
          </select>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="title"
            placeholder="Title"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            name="body"
            placeholder="Description"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Submit</button>
          <Link className="btn btn-danger" to="/">
            Cancel
          </Link>
        </div>
      </form>
    );
  }
}
