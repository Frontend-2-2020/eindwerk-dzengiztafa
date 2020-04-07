// Imports
//////////

import { GET_ERRORS } from "./types";


// Errors actions
/////////////////

// Action to get the errors
export const getErrorsAction = errors => dispatch => {
  dispatch({
    type: GET_ERRORS,
    payload: errors
  })
};