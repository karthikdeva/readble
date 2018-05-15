import React from "react";
import { Link } from "react-router-dom";

export default props => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link
            to={{
              pathname: `/`
            }}
          >
            All Posts
          </Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {props.category}
        </li>
      </ol>
    </nav>
  );
};
