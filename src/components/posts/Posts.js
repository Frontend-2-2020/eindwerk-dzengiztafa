// Imports
//////////

// Base dependencies
import React, { useEffect } from 'react';

// Redux
import { connect } from 'react-redux';
import { getAllPostsAction } from "../../redux/actions/postActions";



// Posts component
//////////////////

const Posts = ({ auth, post, errors, getAllPostsAction }) => {

  useEffect(() => {
    getAllPostsAction();
  },[]);

  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
};


// Map the redux state to props
const mapStateToProps = state => ({
  auth: state.auth,
  post: state.post,
  errors: state.errors
});

// Exports
//////////

export default connect(mapStateToProps, { getAllPostsAction })(Posts);