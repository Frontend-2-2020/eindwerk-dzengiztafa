// Imports
//////////

import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import errorsReducer from './error/errorReducer';


// Exports
//////////

export default combineReducers({
  auth: authReducer,
  errors: errorsReducer
});