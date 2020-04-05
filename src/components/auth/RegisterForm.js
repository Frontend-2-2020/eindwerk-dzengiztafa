// Imports
//////////

// Base dependencies
import React from 'react';

// Redux
import { connect } from 'react-redux';

// Form handling
import { Form } from "formik";

// Components
import { FieldGroup } from "../common/FieldGroup";


// Register form
////////////////

const RegisterForm = ({ errors }) => {
  return (
    <Form>
      <div className="form-group">

        {/* First name */}
        <FieldGroup
          type="text" identifier="first_name" error={errors.first_name}
          info="What is your first name?" placeholder="First name" />


        {/* Last name */}
        <FieldGroup
          type="text" identifier="last_name" error={errors.last_name}
          info="What is your last name?" placeholder="Last name" />

        <input type="submit" className="btn btn-info btn-block mt-4"/>
      </div>
    </Form>
  )
};


// Map the Redux state to props
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});


// Exports
//////////

export default connect(mapStateToProps, null)(RegisterForm)