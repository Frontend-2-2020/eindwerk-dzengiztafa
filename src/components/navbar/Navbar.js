// Imports
//////////

// Base dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { logOutUserAction } from "../../redux/actions/authActions";

// Components
import { NavAuthenticated } from './NavAuthenticated';
import { NavGuest } from './NavGuest';


// Navbar component
///////////////////

const NavBar = ({ logOutUserAction, auth }) => {

  // Fetch isAuthenticated & user from auth in Redux
  const { user, isAuthenticated } = auth;

  // Handler for clicking logout
  const handleLogout = () => {
    logOutUserAction();
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Message board</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="mobile-nav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/posts">Posts</Link>
          </li>
        </ul>

        { isAuthenticated ? <NavAuthenticated user={user} handleLogout={ handleLogout } /> : <NavGuest /> }

      </div>
    </nav>
  );
};


// Prop types for the component
NavBar.propTypes = {
  logOutUserAction: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

// Map the Redux state to props
const mapStateToProps = (state) => ({
  auth: state.auth
});


// Exports
//////////

export default connect(mapStateToProps,{ logOutUserAction })(NavBar);
