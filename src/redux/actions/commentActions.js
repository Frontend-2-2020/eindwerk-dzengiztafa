// Imports
//////////

// Action types
import { GET_COMMENT, SET_COMMENT_LOADING } from "./types";

// Async functionality to REST endpoints
import axios from "axios";

// Actions from other reducers
import { getPostDetailAction } from "./postActions";


// Comment actions
//////////////////

// Action to get a comment
export const getCommentAction = commentId => dispatch => {
  dispatch(setCommentLoading());

  axios.get("https://eindwerk.jnnck.be/api/comments/" + commentId)
    .then(res => {
      dispatch({
        type: GET_COMMENT,
        payload: res.data
      });
      console.log(res.data);
    })
};

// Action to update a comment
export const updateCommentAction = (comment, content) => dispatch => {
  axios.put("https://eindwerk.jnnck.be/api/comments/" + comment.id, content)
    .then(res => {
      dispatch(getPostDetailAction(comment.blog_post_id))
    });
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

// Action to set a comment loading
const setCommentLoading =() => {
  return {
    type: SET_COMMENT_LOADING
  }
};
