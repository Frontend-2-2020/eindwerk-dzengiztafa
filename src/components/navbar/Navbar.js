// Imports
//////////

// Base dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { logOutUserAction } from "../../redux/actions/authActions";
import { clearCurrentProfileAction } from "../../redux/actions/profileActions";


// Component
////////////

const NavBar = ({ logOutUserAction, auth }) => {

  const handleLogout = () => {
    logOutUserAction();
  };

  const authLinks = (
    <ul className="navbar-nav ml-auto">
      <li>
        <Link
          to="/profile"
          className="nav-link">
          <img className="rounded-circle" src={auth.user.avatar} alt={auth.user.first_name}
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

  const guestLinks = (
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


  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
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

        {auth.isAuthenticated ? authLinks : guestLinks}

      </div>
    </nav>
  );
};


// Set the prop types for this component
NavBar.propTypes = {
  logOutUserAction: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

// add the state(s) as a prop
const mapStateToProps = (state) => ({
  auth: state.auth
});


// Exports
//////////

export default connect(mapStateToProps,{ logOutUserAction, clearCurrentProfileAction })(NavBar);