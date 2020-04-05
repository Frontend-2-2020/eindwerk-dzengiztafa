// Imports
//////////

import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';


// Exports
//////////

export default combineReducers({
  auth: authReducer,
});