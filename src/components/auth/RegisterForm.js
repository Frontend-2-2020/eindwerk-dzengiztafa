// Imports
//////////

// Base dependencies
import React from 'react';
import classnames from 'classnames';

// Redux
import { connect } from 'react-redux';

// Form handling
import { Form, Field, ErrorMessage } from "formik";


// Register form
////////////////

const RegisterForm = ({ errors }) => {
  return (
    <Form>
      <div className="form-group">

        {/* First name */}
        <div className="mb-2">
          <label htmlFor="first_name">First name</label>
          <Field
            type="text"
            className={classnames('form-control form-control-lg', {
              'is-invalid': errors.first_name
            })}
            placeholder={"First name"}
            name="first_name"
            id="first_name"
          />
          <small className="form-text text-muted">What is your first name</small>
          <ErrorMessage
            name="first_name"
            render={error => <div className="invalid-feedback">{error}</div>}
          />
        </div>


        {/* Last name */}
        <div className="mb-2">
          <label htmlFor="last_name">Last name</label>
          <Field
            type="text"
            className={classnames('form-control form-control-lg', {
              'is-invalid': errors.last_name
            })}
            placeholder={"Last name"}
            name="last_name"
            id="last_name"
          />
          <small className="form-text text-muted">What is your last name</small>
          <ErrorMessage
            name="last_name"
            render={error => <div className="invalid-feedback">{error}</div>}
          />
        </div>

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