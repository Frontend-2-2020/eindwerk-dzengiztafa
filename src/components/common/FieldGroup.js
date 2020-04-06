// Imports
//////////

// Base dependencies
import React from 'react';
import classnames from "classnames";

// Form handling
import { Field, ErrorMessage } from "formik";


// FieldGroup component
///////////////////////

export const FieldGroup = ({type, identifier, error, placeholder, info, label}) => {
  return (
    <div className="mb-2">
      <label htmlFor={identifier}>{label}</label>
      <Field
        type={type}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        name={identifier}
        id={identifier}
      />
      <small className="form-text text-muted">{info}</small>
      <ErrorMessage
        name={identifier}
        render={error => <div className="invalid-feedback">{error}</div>}
      />
    </div>
  )
};
