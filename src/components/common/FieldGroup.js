// Imports
//////////

// Base dependencies
import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

// Form handling
import { Field, ErrorMessage } from "formik";


// FieldGroup component
///////////////////////

export const FieldGroup = ({ type, identifier, error, placeholder, info, label }) => {
  return (
    <div className="mb-2">
      <label htmlFor={ identifier }>{ label }</label>
      <Field
        type={ type }
        className={ classnames("form-control form-control-lg", { "is-invalid": error }) }
        placeholder={ placeholder }
        name={ identifier }
        id={ identifier }
      />
      <small className="form-text text-muted">{ info }</small>
      <ErrorMessage
        name={ identifier }
        render={ error => <div className="invalid-feedback">{ error }</div> }
      />
    </div>
  )
};


// Prop types for the component
FieldGroup.propTypes = {
  type: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
};