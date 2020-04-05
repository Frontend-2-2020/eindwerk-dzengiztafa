// Imports
//////////

import Validator from "validator";
import isEmpty from '../utils/is-empty';


// Exports
//////////

export const validateRegisterInput = (data) => {
  // Create an empty errors object
  let errors = {};

  console.log(data);

  // Treat the fields to be validated as an empty string when not filled in
  data.first_name = !isEmpty(data.first_name) ? data.first_name : '';
  data.last_name = !isEmpty(data.last_name) ? data.last_name : '';

  // Fill the errors object according to the following rules for registration input

  if (!Validator.isLength(data.first_name, { min: 2, max: 30 })) {
    errors.first_name = 'First name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.first_name)) {
    errors.first_name = 'First name is required';
  }

  if (!Validator.isLength(data.last_name, { min: 2, max: 30 })) {
    errors.last_name = 'Last name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.last_name)) {
    errors.last_name = 'Last name is required';
  }

  // Return errors object and validation boolean
  return errors
};