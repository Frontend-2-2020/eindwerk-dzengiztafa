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


// Login form component
///////////////////////

const LoginForm = ({ errors }) => {
  return (
    <Form>
      <div className="form-group">

        {/* First name */}
        <FieldGroup
          type="email" identifier="email" error={ errors.email }
          info="What is your Email address?" placeholder="Email" label="Email address" />

        {/* Last name */}
        <FieldGroup
          type="password" identifier="password" error={ errors.password }
          info="What is your password?" placeholder="" label="Password"/>

        <input type="submit" className="btn btn-info btn-block mt-4"/>
      </div>
    </Form>
  )
};


// Map the Redux state to props
const mapStateToProps = state => ({
  errors: state.errors
});


// Exports
//////////

export default connect(mapStateToProps, null)(LoginForm)