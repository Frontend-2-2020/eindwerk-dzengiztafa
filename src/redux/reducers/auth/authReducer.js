// Imports
//////////

import { SET_CURRENT_USER } from '../../actions/types'
import isEmpty from '../../../utils/is-empty';


// Initial auth state
const initialAuthState = {
  isAuthenticated: false,
  user: {}
};


// Redux actions
////////////////

export default function(state = initialAuthState, action) {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}