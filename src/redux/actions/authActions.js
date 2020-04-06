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
export const registerUserAction = (userData, history) => {
  axios.post('https://eindwerk.jnnck.be/api/users', {
    ...userData,
    avatar: "https://api.adorable.io/avatars/285/" + userData.avatar
  })
    .then(res => {
      history.push('/login');
    })
};

// Functionality to fetch the current user & redirect to the login page
export const fetchCurrentUser = history => dispatch => {
  axios.get('https://eindwerk.jnnck.be/api/user').then(res => {
     if(history) { history.push('/posts'); }
    dispatch(setCurrentUser(res.data))
  });
};

// Login - Get User Token
export const loginUserAction = (userData, history) => dispatch => {
  axios.post('https://eindwerk.jnnck.be/oauth/token', {
    'username': userData.email,
    'password': userData.password,
    'grant_type': 'password',
    'client_id': 2,
    'client_secret': 'iwrHFPcaiQ3bZTzHEwQpYkpiuHUlbIOJ9SAI6DLI'
  })
    .then(res => {
      localStorage.setItem('jwtToken', res.data.access_token);
      setAuthToken(res.data.access_token);

      axios.get('https://eindwerk.jnnck.be/api/user').then(res => {
        history.push('/posts');
        dispatch(setCurrentUser(res.data))
      });
    })
};


// Logout
export const logOutUserAction = () => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}))
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