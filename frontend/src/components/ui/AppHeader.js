import React from "react";
import * as FontAwesome from "react-icons/lib/fa";
import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
      <Link
        className="navbar-brand mr-0 mr-md-2"
        to={{
          pathname: `/`
        }}
      >
        <FontAwesome.FaComments size={40} /> Readable
      </Link>
    </header>
  );
};

export default AppHeader;
