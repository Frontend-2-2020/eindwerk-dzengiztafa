// Imports
//////////

// Base dependencies
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { fetchAndPrepareCurrentUserAction, loginUserAction } from "../../redux/actions/authActions";
import { getErrorsAction } from "../../redux/actions/errorActions";

// Form handling
import { Formik } from "formik";
import { validateLoginInput } from "../../validation/login";

// Components
import LoginForm from "./LoginForm";


// Login component
//////////////////

const Login = ({ auth, getErrorsAction, loginUserAction, fetchAndPrepareCurrentUserAction }) => {

  // Fetch isAuthenticated from auth in Redux state
  const { isAuthenticated } = auth;

  // Fetch the history
  const history = useHistory();

  // When the user is already logged in or a token is available, redirect to the posts page
  useEffect(() => {
    if (localStorage.jwtToken || isAuthenticated) {
      fetchAndPrepareCurrentUserAction(localStorage.jwtToken, history);
    }
  });

  // Function to handle the submit data. This will trigger a redux action
  const handleSubmit = data => {
    loginUserAction(data, history);
  };

  // Function to handle the validation of the input.
  const handleValidation = input => {
    const errors = validateLoginInput(input);

    // Trigger the Redux action to get the errors
    getErrorsAction(errors);

    // Return the Errors to Formik
    return errors;
  };


  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Login</h1>
            <p className="lead text-center">Login to your Messageboard account</p>
            <p className="text-info text-center mb-4"><i className="far fa-user fa-4x"/></p>

            <Formik
              onSubmit={ handleSubmit }
              validate={ handleValidation }
              initialValues={{
                email: "",
                password: "",
              }}
            >
              <LoginForm />
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};


// Prop types for the component
Login.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  loginUserAction: PropTypes.func.isRequired,
  getErrorsAction: PropTypes.func.isRequired,
  fetchAndPrepareCurrentUserAction: PropTypes.func.isRequired
};


// Map the Redux state to props
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});


// Exports
//////////

export default connect(mapStateToProps, { getErrorsAction, loginUserAction, fetchAndPrepareCurrentUserAction })(Login);