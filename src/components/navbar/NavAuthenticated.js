// Imports
//////////

// Base dependencies
import React from 'react';
import { Link } from "react-router-dom";



export const NavAuthenticated = ({ user, handleLogout }) => {
  return (
    <ul className="navbar-nav ml-auto">
      <li>
        <Link
          to="/profile"
          className="nav-link">
          <img className="rounded-circle" src={user.avatar} alt={user.first_name}
               style={{width: '25px', marginRight: '5px'}}/>
        </Link>
      </li>
      <li className="navbar-item d-flex align-items-center">
        <Link className="nav-link" to="#" onClick={
          handleLogout
        }>
          Log out <i className="fas fa-sign-out-alt fa-lg ml-2 text-align-center"/>
        </Link>
      </li>
    </ul>
  );
};