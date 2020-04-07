// Imports
//////////

// Action types
import { SET_CURRENT_USER } from "./types";

// JWT token
import { setAuthToken } from "../../utils/setAuthToken";

// Async functionality to REST endpoints
import axios from "axios";


// Auth actions
///////////////

// Action to register a user
export const registerUserAction = (userData, history) => {
  axios.post("https://eindwerk.jnnck.be/api/users", {
    ...userData,
    avatar: "https://api.adorable.io/avatars/285/" + userData.avatar
  })
    .then(res => {
      history.push("/login");
    })
};

// Action to fetch the current user & redirect to the login page
export const fetchAndPrepareCurrentUserAction = (token, history) => async dispatch => {
  // Set the access token to the authorization header of Axios
  setAuthToken(token);

  // Fetch the current user
  const result = await axios.get("https://eindwerk.jnnck.be/api/user");
  dispatch(setCurrentUser(result.data));

  // Redirect to the posts page
  history.push("/posts");
};

// Action to log in & fetch the user
export const loginUserAction = (userData, history) => dispatch => {
  axios.post("https://eindwerk.jnnck.be/oauth/token", {
    username: userData.email,
    password: userData.password,
    grant_type: "password",
    client_id: 2,
    client_secret: "iwrHFPcaiQ3bZTzHEwQpYkpiuHUlbIOJ9SAI6DLI"
  })
    .then(res => {
      // Save the access token in the localstorage & prepare + fetch the current user
      localStorage.setItem("jwtToken", res.data.access_token);
      dispatch(fetchAndPrepareCurrentUserAction(res.data.access_token, history));
    })
};

// Action to log a user out
export const logOutUserAction = () => dispatch => {
  // Clear the JWT, remove it from Axios header
  localStorage.removeItem("jwtToken");
  setAuthToken(false);

  // Dispatch the action to empty the current user
  dispatch(setCurrentUser({}))
};

// Action to set the current user
export const setCurrentUser = (userData) => {
  return {
    type: SET_CURRENT_USER,
    payload: userData
  }
};