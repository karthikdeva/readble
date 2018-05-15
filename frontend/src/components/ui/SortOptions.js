import React, { Component } from "react";

export default class SortOptions extends Component {
  handleSortOption = event => {
    this.props.sort(event.target.value);
  };

  sortOptions = [
    {
      sortId: 0,
      value: "Old Post"
    },
    {
      sortId: 1,
      value: "Latest Post"
    },
    {
      sortId: 2,
      value: "Less Votes"
    },
    {
      sortId: 3,
      value: "More Votes"
    }
  ];

  render() {
    return (
      <select className="form-control" onChange={e => this.handleSortOption(e)}>
        <option value="all">Sort by</option>
        {this.sortOptions.map(option => (
          <option key={option.sortId} value={option.sortId}>
            {option.value}
          </option>
        ))}
      </select>
    );
  }
}
