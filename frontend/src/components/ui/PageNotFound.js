import React from "react";
import { Link } from "react-router-dom";

export default() => {
  return (
    <div className="page-not-found">
      <h1>Oops!... Page Not Found - 404</h1>
      <button className="btn btn-default">
        <Link to={{
          pathname: `/`
        }}>
          Home
        </Link>
      </button>
    </div>
  );
};
