// Imports
//////////

// Action types
import { GET_ALL_POSTS, SET_POSTS_LOADING } from "./types";

// Async functionality to REST endpoints
import axios from "axios";


// Post actions
///////////////

// Action to get all the posts
export const getAllPostsAction = () => dispatch => {
  dispatch(setPostsLoading());

  axios.get("https://eindwerk.jnnck.be/api/posts")
    .then(res => {

      dispatch({
        type: GET_ALL_POSTS,
        payload: res.data
      })
    })

};

// Action to create a post
export const createPostAction = content => dispatch => {
  axios.post('https://eindwerk.jnnck.be/api/posts', content)
    .then(res => {
      dispatch(getAllPostsAction());
    })
    .catch(err => {
      console.log(err);
    })
};

// Action to set the posts as loading
const setPostsLoading = () => {
  return {
    type: SET_POSTS_LOADING
  }
};