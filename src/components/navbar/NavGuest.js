// Imports
//////////

// Base dependencies
import React from "react";
import { Link } from "react-router-dom";


// NavGuest component
/////////////////////

export const NavGuest = () => {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="navbar-item d-flex align-items-center mr-4">
        <Link className="nav-link" to="/login">
          Login <i className="fas fa-sign-in-alt fa-lg ml-2 text-align-center"/>
        </Link>
      </li>
      <li className="navbar-item d-flex align-items-center">
        <Link className="nav-link" to="/register">
          Register <i className="far fa-user fa-lg ml-2 text-align-center"/>
        </Link>
      </li>
    </ul>
  );
};