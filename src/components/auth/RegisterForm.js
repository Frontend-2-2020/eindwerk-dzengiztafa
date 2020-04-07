// Imports
//////////

// Base dependencies
import React from "react";

// Redux
import { connect } from "react-redux";

// Form handling
import { Form } from "formik";

// Components
import { FieldGroup } from "../common/FieldGroup";


// Register form component
//////////////////////////

const RegisterForm = ({ errors }) => {
  return (
    <Form>
      <div className="form-group">

        <div className="row">
          <div className="col-md-6">
            {/* First name */}
            <FieldGroup
              type="text" identifier="first_name" error={ errors.first_name }
              info="What is your first name?" placeholder="First name" label="First Name" />
          </div>
          <div className="col-md-6">
            {/* Last name */}
            <FieldGroup
              type="text" identifier="last_name" error={ errors.last_name }
              info="What is your last name?" placeholder="Last name" label="Last Name"/>
          </div>
        </div>

        {/* Email */}
        <FieldGroup
          type="email" identifier="email" error={ errors.email }
          info="Wih what Email address are you registering?" placeholder="john@doe.com" label="Email address" />

        <div className="row">
          <div className="col-md-6">
            {/* Password */}
            <FieldGroup
              type="password" identifier="password" error={ errors.password }
              info="Choose a password" placeholder="" label="Password" />
          </div>
          <div className="col-md-6">
            {/* Confirm password */}
            <FieldGroup
              type="password" identifier="password2" error={ errors.password2 }
              info="Confirm your password" placeholder="" label="Cornfirm password"/>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-2">
            {/* Color */}
            <FieldGroup
              type="color" identifier="favorite_color" error={ errors.favorite_color }
              info="Choose your favorite color" placeholder="#000000" label="Color" />
          </div>
          <div className="col">
            {/* Confirm password */}
            <FieldGroup
              type="text" identifier="avatar" error={ errors.avatar }
              info="What is your avatar" placeholder="Name avatar" label="Avatar"/>
          </div>
        </div>

        {/* Submit button */}
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

export default connect(mapStateToProps, null)(RegisterForm)