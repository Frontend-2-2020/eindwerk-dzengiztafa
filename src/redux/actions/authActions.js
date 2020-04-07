// Imports
//////////

// Action types
import { SET_CURRENT_USER } from "./types";

// JWT token
import setAuthToken from "../../utils/setAuthToken";

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
export const fetchCurrentUserAction = history => async dispatch => {
  const result = await axios.get("https://eindwerk.jnnck.be/api/user");
  dispatch(setCurrentUser(result.data));

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
    .then(async res => {
      localStorage.setItem("jwtToken", res.data.access_token);
      setAuthToken(res.data.access_token);

      dispatch(fetchCurrentUserAction(history));
    })
};

// Action to log a user out & clear the JWT
export const logOutUserAction = () => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}))
};

// Action to set the current user
export const setCurrentUser = (userData) => {
  return {
    type: SET_CURRENT_USER,
    payload: userData
  }
};