// Imports
//////////

// Base dependencies
import React from "react";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { addCommentAction } from "../../redux/actions/postActions";
import { getErrorsAction } from "../../redux/actions/errorActions";

// Form handling
import { Formik } from "formik";
import { validateNewCommentInput } from "../../validation/comment";

// CKEditor
import CommentForm from "./CommentForm";


// PostEditor component
///////////////////////

const CommentEditor = ({ getErrorsAction, addCommentAction, postId }) => {

  // Generate the initialNewPostValues
  const initialCommentValues = {
    body: "What's on your <strong>mind</strong>?"
  };

  // Function to handle the sumbit of the form data
  const handleFormSubmit = (commentInfo, { resetForm }) => {

    // Generate the post data
    const newCommentData = {
      blog_post_id: postId,
      body: commentInfo.body
    };

    // Fire up the action to create a post
    addCommentAction(newCommentData);

    // Reset the form
    resetForm({
      ...initialCommentValues
    })
  };

  // Function to handle the validation of the form
  const handleValidation = input => {
    const errors = validateNewCommentInput(input);

    // Trigger the redux action to get the errors
    getErrorsAction(errors);

    // Return the errors to formik
    return errors
  };

  return (
    <div style={{ margin: "3em" }}>
      <h5>Add a comment</h5>

      <Formik
        onSubmit={ handleFormSubmit }
        validate={ handleValidation }
        initialValues={{
          ...initialCommentValues
        }}
      >
        {props => <CommentForm { ...props }/>}
      </Formik>
    </div>
  );
};


// Prop types for the component
CommentEditor.propTypes = {
  addCommentAction: PropTypes.func.isRequired,
};


// Map the redux state to props
const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getErrorsAction, addCommentAction })(CommentEditor);
