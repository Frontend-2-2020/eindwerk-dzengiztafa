// Imports
//////////

// Action types
import { GET_ALL_POSTS, GET_POST_DETAIL, SET_POSTS_LOADING } from "./types";

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

// Action to get the post detail
export const getPostDetailAction = postId => dispatch => {
  axios.get('https://eindwerk.jnnck.be/api/posts/' + postId)
    .then(res => {
      dispatch({
        type: GET_POST_DETAIL,
        payload: res.data
      })
    })
};

// Action to update a post
export const updatePostAction = (postId, content, history) => {
  axios.put('https://eindwer.jnnck.be/api/posts/' + postId, content)
    .then(res => {
      history.push('/posts')
    })
};

// Action to delete a post
export const deletePostAction = (postId, history) => dispatch => {
  axios.delete('https://eindwerk.jnnck.be/api/posts/' + postId)
    .then(res => {
      history.push('/posts')
    })
};

// Action to edit a post
export const editPostAction = (postId, postBody, history) => dispatch => {
  console.log('Editing postId ' + postId + ' with body: ' + postBody);
  history.push('/posts');
};

// Action to set the posts as loading
const setPostsLoading = () => {
  return {
    type: SET_POSTS_LOADING
  }
};
