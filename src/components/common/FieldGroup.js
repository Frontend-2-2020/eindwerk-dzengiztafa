// Imports
//////////

import React from 'react';
import { Field, ErrorMessage } from "formik";
import classnames from "classnames";


// FieldGroup component
///////////////////////

export const FieldGroup = ({type, identifier, error, placeholder, info}) => {
  return (
    <div className="mb-2">
      <label htmlFor={identifier}>First name</label>
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
