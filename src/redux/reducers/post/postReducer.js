// Imports
//////////

import { GET_ALL_POSTS, SET_POSTS_LOADING, GET_POST_DETAIL } from "../../actions/types";


// Initial Posts state
//////////////////////

const initialPostsState = {
  batchPosts: {},
  singlePost: {},
  loading: false
};


// Reducer action listeners
///////////////////////////

export default function(state = initialPostsState, action) {
  switch(action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        batchPosts: action.payload,
        loading: false
      };
    case SET_POSTS_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_POST_DETAIL:
      return {
        ...state,
        singlePost: action.payload,
        loading: false
      };
    default:
      return state
  }
}