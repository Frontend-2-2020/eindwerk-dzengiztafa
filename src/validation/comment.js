// Imports
//////////

import Validator from "validator";
import { isEmpty } from "../utils/is-empty";


// Exports
//////////

export const validateNewCommentInput = data => {
  // Create an empty errors object
  let errors = {};

  // Treat the fields to be validated as an empty string when not filled in
  data.body = !isEmpty(data.body) ? data.body : "";

  // Fill the errors object according to the following rules for registration input

  if (Validator.isEmpty(data.body)) {
    errors.body = "You must provide content for your comment"
  }

  // Return errors object
  return errors
};
