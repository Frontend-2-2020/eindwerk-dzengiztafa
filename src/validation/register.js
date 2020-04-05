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
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';
  data.color = !isEmpty(data.color) ? data.color : '';
  data.avatar = !isEmpty(data.avatar) ? data.avatar : '';


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

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Invalid email';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is empty';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match'
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm password is required';
  }

  if (!Validator.isLength(data.avatar, { min: 2, max: 30 })) {
    errors.avatar = 'First name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.avatar)) {
    errors.avatar = 'First name is required';
  }

  // Return errors object and validation boolean
  return errors
};