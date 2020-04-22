// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { createPostAction } from "../../redux/actions/postActions";
import { getErrorsAction } from "../../redux/actions/errorActions";

// Form handling
import { Formik } from "formik";
import { validateNewPostInput } from "../../validation/post";

// CKEditor
import PostForm from "./PostForm";


// PostEditor component
///////////////////////

const PostEditor = ({ getErrorsAction, createPostAction, initialTitle }) => {

  //
  const handleFormSubmit = postInfo => {
    console.log('trying to submit new post');
    const newPostData = {
      title: postInfo.title,
      body: postInfo.body
    };

    createPostAction(newPostData);

  };

  const handleValidation = input => {
    const errors = validateNewPostInput(input);

    // Trigger the redux action to get the errors
    getErrorsAction(errors);

    // Return the errors to formik
    return errors
  };

  return (
    <div style={{ margin: "3em" }}>
      <h5>New Post</h5>

      <Formik
        onSubmit={ handleFormSubmit }
        validate={ handleValidation }
        initialValues={{
          title: initialTitle,
          body: "What's on your <strong>mind</strong>?"
        }}
      >
          {props => <PostForm {...props}/>}
      </Formik>
    </div>
  );
};


// Prop types for the component
PostEditor.propTypes = {
  createPostAction: PropTypes.func.isRequired,
  initialTitle: PropTypes.string.isRequired,
};


// Map the redux state to props
const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getErrorsAction, createPostAction })(PostEditor);