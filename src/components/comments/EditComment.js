// Imports
//////////

// Base dependencies
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { getPostDetailAction } from "../../redux/actions/postActions";
import { getErrorsAction } from "../../redux/actions/errorActions";
import { getCommentAction, updateCommentAction } from "../../redux/actions/commentActions";


// Components
import { Spinner } from "../spinner/Spinner";

// Utils
import { isEmpty } from "../../utils/is-empty";
import { Formik } from "formik";
import CommentForm from "./CommentForm";
import { validateNewCommentInput } from "../../validation/comment";


// EditComment component
/////////////////////

const EditComment = ({ match, getCommentAction, getErrorsAction, updateCommentAction, post, comment }) => {

  const history = useHistory();

  // When the component loads, fire the Redux action to get the post detail
  useEffect(() => {
    getCommentAction(match.params.commentId)
  },[getCommentAction, match.params.commentId]);

  // Function to handle the sumbit of the form data
  const handleFormSubmit = postInfo => {

    // Generate the post data
    const newCommentData = {
      body: postInfo.body
    };

    // Fire up the action to create a post
    updateCommentAction(comment.singleComment, newCommentData);

    // go back to original post
    history.push('/post/' + comment.blog_post_id);

  };

  // Function to handle the validation of the form
  const handleValidation = input => {
    const errors = validateNewCommentInput(input);

    // Trigger the redux action to get the errors
    getErrorsAction(errors);

    // Return the errors to formik
    return errors
  };

  // Generate content for the component
  let content;
  if(comment.loading || isEmpty(comment.singleComment)) {
    content = <Spinner />
  } else {
    content = (
      <Formik
        onSubmit={ handleFormSubmit }
        validate={ handleValidation }
        initialValues={{
          body: comment.singleComment.body
        }}
      >
        {props => <CommentForm { ...props }/>}
      </Formik>
    )
  }

  return (
    <div>
      { content }
    </div>
  );
};


// Prop types for the component
EditComment.propTypes = {
  match: PropTypes.object.isRequired,
  getCommentAction: PropTypes.func.isRequired,
  updateCommentAction: PropTypes.func.isRequired,
  getErrorsAction: PropTypes.func.isRequired
};


const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth,
  comment: state.comment
});

// Exports
//////////

export default connect(mapStateToProps, { getPostDetailAction, updateCommentAction, getCommentAction, getErrorsAction })(EditComment);
