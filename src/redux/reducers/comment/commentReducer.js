// Imports
//////////

import { GET_COMMENT, SET_COMMENT_LOADING} from "../../actions/types";


// Initial Comment state
////////////////////////

const initialComentState = {
  singleComment: {},
  loading: false
};


// Reducer action listeners
///////////////////////////

export default function(state = initialComentState, action) {
  switch(action.type) {
    case GET_COMMENT:
      return {
        ...state,
        singleComment: action.payload,
        loading: false
      };
    case SET_COMMENT_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state
  }
}
