// Imports
//////////

import { GET_ERRORS } from "./types";


// Errors actions
/////////////////

export const getErrorsAction = errors => dispatch => {
  dispatch({
    type: GET_ERRORS,
    payload: errors
  })
};