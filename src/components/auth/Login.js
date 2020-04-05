// Imports
//////////

// Base dependencies
import React from 'react';

// Redux
import { connect } from 'react-redux';

// Form handling
import { Formik } from 'formik';
import { getErrorsAction } from "../../redux/actions/errorActions";
import { validateLoginInput } from "../../validation/login";

// Components
import LoginForm from "./LoginForm";


// Register component
/////////////////////

const Login = ({ getErrorsAction }) => {

  // Function to handle the submit data. This will trigger a redux action
  const handleSubmit = data => {
    console.log(data)
  };

  // Function to handle the validation of the input.
  const handleValidation = input => {
    console.log("handling validation");
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
            <p className="auth__icon text-center mb-4"><i className="far fa-user fa-4x"/></p>

            <Formik
              onSubmit={handleSubmit}
              validate={handleValidation}
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


// Map the Redux state to props
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});


// Exports
//////////

export default connect(mapStateToProps, { getErrorsAction })(Login);