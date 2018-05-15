import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PostCategories extends Component {
  componentWillMount() {
    this.props.getCategories();
  }
  render() {
    return (
      <div className="categories">
        <ul name="categories" id="categories" className="list-group">
          <li className="list-group-item active disabled">All Posts </li>
          {this.props.categories &&
            this.props.categories.length !== 0 &&
            this.props.categories.map(
              category =>
                category.path && (
                  <Link
                    className="list-group-item list-group-item-action"
                    key={category.name}
                    to={{
                      pathname: `/${category.name}`,
                      state: { category: category.name }
                    }}
                  >
                    {category.path}
                  </Link>
                )
            )}
        </ul>
      </div>
    );
  }
}
