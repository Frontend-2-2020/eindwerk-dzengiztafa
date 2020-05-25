// Imports
//////////

// Base dependencies
import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


// NavAuthenticated component
/////////////////////////////

export const NavAuthenticated = ({ user, handleLogout }) => {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="navbar-item d-flex align-items-center">
        <Link
          to="/profile"
          className="nav-link d-flex align-items-center">
          <img className="rounded-circle" src={ user.avatar } alt={ user.first_name }
               style={{ width: '25px', marginRight: '5px' }}/>
        </Link>
      </li>
      <li className="navbar-item d-flex align-items-center">
        <Link className="nav-link" to="#" onClick={
          handleLogout
        }>
          Log out <i className="fas fa-sign-out-alt ml-2 text-align-center"/>
        </Link>
      </li>
    </ul>
  );
};


// Prop types for the component
NavAuthenticated.propTypes = {
  user: PropTypes.object.isRequired,
  handleLogout: PropTypes.func.isRequired,
};
