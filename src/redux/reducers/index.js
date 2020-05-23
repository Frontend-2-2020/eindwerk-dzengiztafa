// Imports
//////////

import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import errorsReducer from "./error/errorReducer";
import postReducer from "./post/postReducer";
import commentReducer from "./comment/commentReducer";


// Exports
//////////

export default combineReducers({
  auth: authReducer,
  post: postReducer,
  errors: errorsReducer,
  comment: commentReducer
});
