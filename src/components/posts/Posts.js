// Imports
//////////

// Base dependencies
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { getAllPostsAction } from "../../redux/actions/postActions";


// Posts component
//////////////////

const Posts = ({ auth, post, errors, getAllPostsAction }) => {

  useEffect(() => {
    getAllPostsAction();
  },[getAllPostsAction]);

  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
};


// Prop types for the component
Posts.propTypes = {
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  getAllPostsAction: PropTypes.func.isRequired,
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