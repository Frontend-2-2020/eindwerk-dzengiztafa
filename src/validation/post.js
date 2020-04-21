// Imports
//////////

import Validator from "validator";
import { isEmpty } from "../utils/is-empty";


// Exports
//////////

export const validateNewPostInput = data => {
  // Create an empty errors object
  let errors = {};

  // Treat the fields to be validated as an empty string when not filled in
  data.title = !isEmpty(data.title) ? data.title : "";

  // Fill the errors object according to the following rules for registration input

  if (!Validator.isLength(data.title, { min: 2, max: 30 })) {
    errors.title = "Title must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title is required";
  }

  // Return errors object
  return errors
};