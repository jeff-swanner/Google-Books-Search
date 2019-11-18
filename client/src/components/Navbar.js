import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="navbar-brand">Google Books</div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className={`nav-item ${props.search}`}>
            <a className="nav-link" href="./">Search</a>
          </li>
          <li className={`nav-item ${props.saved}`}>
            <a className="nav-link" href="./saved">Saved</a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-danger" href="https://github.com/jeff-swanner/google-books-search" target="_blank" rel="noopener noreferrer">Github Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
