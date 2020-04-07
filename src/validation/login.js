// Imports
//////////

import Validator from "validator";
import { isEmpty } from "../utils/is-empty";


// Exports
//////////

export const validateLoginInput = (data) => {
  // Create an empty errors object
  let errors = {};

  // Treat the fields to be validated as an empty string when not filled in
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // Fill the errors object according to the following rules for registration input

  if (!Validator.isLength(data.email, { min: 2, max: 30 })) {
    errors.email = "Email must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  // Return errors object
  return errors
};