// Imports
//////////

// Action types
import { SET_CURRENT_USER } from "./types";

// JWT token
import setAuthToken from '../../utils/setAuthToken';

// Async functionality to REST endpoints
import axios from 'axios';



// Actions
//////////

// Register User Action
export const registerUserAction = (userData, history) => dispatch => {
  axios.post('https://eindwerk.jnnck.be/api/users', {
    ...userData,
    avatar: "https://api.adorable.io/avatars/285/" + userData.avatar
  })
    .then(res => {
      console.log();
      history.push('/login');
    })
};

// Login - Get User Token
export const loginUserAction = userData => dispatch => {
  axios.post('https://eindwerk.jnnck.be/oauth/token', {
    'username': userData.email,
    'password': userData.password,
    'grant_type': 'password',
    'client_id': 2,
    'client_secret': 'iwrHFPcaiQ3bZTzHEwQpYkpiuHUlbIOJ9SAI6DLI'
  })
    .then(res => {

      console.log(res.data);

      localStorage.setItem('jwtToken', res.data.access_token);
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.access_token;

      axios.get('https://eindwerk.jnnck.be/api/user').then(res => { dispatch(setCurrentUser(res.data)) })
    })
};


// Logout
export const logOutUserAction = () => dispatch => {
  setAuthToken();
  localStorage.removeItem('jwtToken');
  setCurrentUser({})
};


// Helper methods
/////////////////

// Set logged in user
export const setCurrentUser = (userData) => {
  return {
    type: SET_CURRENT_USER,
    payload: userData
  }
};