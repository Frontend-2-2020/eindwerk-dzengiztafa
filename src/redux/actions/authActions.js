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
  axios.post('https://eindwerk.jnnck.be/api/users', userData)
    .then(res => {
      console.log(res.data);
      history.push('/login');
    })
};

// Login - Get User Token
export const loginUserAction = userData => dispatch => {
  axios.post('https://eindwerk.jnnck.be/oath/token', userData)
    .then(res => {
      console.log(res.data);
    })

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