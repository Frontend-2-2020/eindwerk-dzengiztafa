// Imports
//////////

import { GET_ERRORS } from '../../actions/types';

// Create the initial state
const initialErrorState = {};


// Reducer action listeners
///////////////////////////

export default function(state = initialErrorState, action) {
  switch(action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}