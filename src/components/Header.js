import React from "react";
import { Link } from 'react-router-dom';
import "../css/Header.css"

import { SearchBar } from "./Search/SearchBar";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" id="header">
      <div className="container-fluid">
        <a className="navbar-brand text-success" href="#">
          socmo
        </a>
        <button
          className="navbar-toggler bg-secondary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link active text-light" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active text-light" to="/search">Search</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active text-light" to="/add-post">Add Post</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active text-light" to="/profile">Profile</Link>
            </li>
          </ul>

          <SearchBar />

        </div>
      </div>
    </nav>
  );
};
