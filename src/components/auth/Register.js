// Imports
//////////

// Base dependencies
import React from 'react';
import { useHistory } from "react-router";

// Redux
import { connect } from 'react-redux';
import { getErrorsAction } from "../../redux/actions/errorActions";
import { registerUserAction } from "../../redux/actions/authActions";

// Form handling
import { Formik } from 'formik';
import { validateRegisterInput } from "../../validation/register";

// Components
import RegisterForm from "./RegisterForm";


// Register component
/////////////////////

const Register = ({ getErrorsAction, registerUserAction }) => {

  // Fetch the history
  let history = useHistory();

  // Function to handle the submit data. This will trigger a redux action
  const handleSubmit = data => {
    const dataToSend = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      favorite_color: data.favorite_color,
      password: data.password,
      avatar: data.avatar
    };
    registerUserAction(dataToSend, history);
  };

  // Function to handle the validation of the input.
  const handleValidation = input => {
    console.log("handling validation");
    const errors = validateRegisterInput(input);

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
            <h1 className="display-4 text-center">Register</h1>
            <p className="lead text-center">Register your Messageboard account</p>
            <p className="text-info text-center mb-4"><i className="fas fa-user fa-4x"/></p>

            <Formik
              onSubmit={ handleSubmit }
              validate={ handleValidation }
              initialValues={{
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                password2: "",
                color: "",
                avatar: ""
              }}
            >
              <RegisterForm />
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

export default connect(mapStateToProps, { getErrorsAction, registerUserAction })(Register);