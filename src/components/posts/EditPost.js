// Imports
//////////

// Base dependencies
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { getPostDetailAction } from "../../redux/actions/postActions";
import {isEmpty} from "../../utils/is-empty";
import {Spinner} from "../spinner/Spinner";


// EditPost component
/////////////////////

const EditPost = ({ match, getPostDetailAction, post }) => {

  // When the component loads, fire the Redux action to get the post detail
  useEffect(() => {
    getPostDetailAction(match.params.postId)
  },[getPostDetailAction, match.params.postId]);

  console.log(post.singlePost);

  // Generate content for the component
  let content;
  if(post.loading || isEmpty(post.singlePost)) {
    content = <Spinner />
  } else {
    content = <h1>Editing post with id {match.params.postId}</h1>
  }

  return (
    <div>
      { content }
    </div>
  );
};


// Prop types for the component
EditPost.propTypes = {
  match: PropTypes.object.isRequired,
  getPostDetailAction: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth
})

// Exports
//////////

export default connect(mapStateToProps, { getPostDetailAction })(EditPost);
