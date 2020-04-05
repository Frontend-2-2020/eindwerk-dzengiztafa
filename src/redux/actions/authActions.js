// Imports
//////////

// Action types
import { GET_ERRORS, SET_CURRENT_USER } from "./types";

// JWT token
import setAuthToken from '../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

// Async functionality to REST endpoints
import axios from 'axios';



// Actions
//////////

// Register User Action
export const registerUserAction = (userData, history) => dispatch => {

};

// Login - Get User Token
export const loginUserAction = userData => dispatch => {

};

// Logout
export const logOutUserAction = () => dispatch => {

};



// Helper methods
/////////////////

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
};