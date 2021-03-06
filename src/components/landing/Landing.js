// Imports
//////////

// Base dependencies
import React, { useEffect } from "react";
import { PropTypes } from "prop-types";
import { useHistory, Link } from "react-router-dom";

// Redux
import { connect } from 'react-redux';


// Landing page component
/////////////////////////

const Landing = ({ auth }) => {

  // Fetch the history
  let history = useHistory();

  // Fetch data from auth in Redux
  const { isAuthenticated } = auth;

  // When the user is already logged in, redirect to the posts
  useEffect(() => {
    if(isAuthenticated) {
      history.push("/posts")
    }
  });

    return (
      <div className="landing">
        <div className="gray_overlay">
          <div className="landing_functionality">
            <div><Link to="/login" className="btn btn-light landing_button">Login</Link></div>
            <div><Link to="/register" className="btn btn-outline-light landing_button">Register</Link></div>
          </div>
        </div>
      </div>
    );
};


// Helper methods
/////////////////

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});


// Exports
//////////

export default connect(mapStateToProps, null)(Landing);
