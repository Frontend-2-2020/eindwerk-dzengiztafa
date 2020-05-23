// Imports
//////////

// Action types
import { GET_ALL_POSTS, GET_POST_DETAIL, SET_POSTS_LOADING } from "./types";

// Async functionality to REST endpoints
import axios from "axios";


// Post actions
///////////////

// Action to get all the posts
export const getAllPostsAction = (page) => dispatch => {
  dispatch(setPostsLoading());

  const url = page
    ? "https://eindwerk.jnnck.be/api/posts?page=" + page
    : "https://eindwerk.jnnck.be/api/posts";

  axios.get(url)
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
  axios.put('https://eindwerk.jnnck.be/api/posts/' + postId, content)
    .then(res => {
      history.push('/posts');
    })
};

// Action to delete a post
export const deletePostAction = (postId, history) => dispatch => {
  axios.delete('https://eindwerk.jnnck.be/api/posts/' + postId)
    .then(res => {
      if(history.location.pathname === "/posts") {
        dispatch(getAllPostsAction())
      } else {
        history.push('/posts')
      }
    })
};

// Action to edit a post
export const editPostAction = (postId, postBody, history) => dispatch => {
  console.log('Editing postId ' + postId + ' with body: ' + postBody);
  history.push('/posts');
};

// Action to add a comment to a post
export const addCommentAction = commentData => dispatch => {
  axios.post("https://eindwerk.jnnck.be/api/comments", commentData)
    .then(res => {
      dispatch(getPostDetailAction(commentData.blog_post_id))
    })
};

// Action to delete a comment from a post
export const removeCommentAction = (commentId, postId) => dispatch => {
  axios.delete("https://eindwerk.jnnck.be/api/comments/" + commentId)
    .then(res => {
      dispatch(getPostDetailAction(postId))
    })
    .catch(err => {
      console.log(err)
    })
};

// Action to edit a comment
export const editCommentAction = commentId => dispatch => {
  console.log('Editing comment with id ' + commentId)
};

// Action to set the posts as loading
const setPostsLoading = () => {
  return {
    type: SET_POSTS_LOADING
  }
};
