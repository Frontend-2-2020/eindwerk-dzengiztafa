// Imports
//////////

// Base dependencies
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { getPostDetailAction, updatePostAction } from "../../redux/actions/postActions";
import { getErrorsAction } from "../../redux/actions/errorActions";


// Components
import { Spinner } from "../spinner/Spinner";

// Utils
import { isEmpty } from "../../utils/is-empty";
import PostForm from "./PostForm";
import { Formik } from "formik";
import { validateNewPostInput } from "../../validation/post";


// EditPost component
/////////////////////

const EditPost = ({ match, getPostDetailAction, getErrorsAction, post }) => {

  const history = useHistory();

  // When the component loads, fire the Redux action to get the post detail
  useEffect(() => {
    getPostDetailAction(match.params.postId)
  },[getPostDetailAction, match.params.postId]);

  // Function to handle the sumbit of the form data
  const handleFormSubmit = postInfo => {

    // Generate the post data
    const newPostData = {
      title: postInfo.title,
      body: postInfo.body
    };

    // Fire up the action to create a post
    updatePostAction(post.singlePost.id, newPostData, history, '/posts');

  };

  // Function to handle the validation of the form
  const handleValidation = input => {
    const errors = validateNewPostInput(input);

    // Trigger the redux action to get the errors
    getErrorsAction(errors);

    // Return the errors to formik
    return errors
  };

  // Generate content for the component
  let content;
  if(post.loading || isEmpty(post.singlePost)) {
    content = <Spinner />
  } else {
    content = (
      <Formik
        onSubmit={ handleFormSubmit }
        validate={ handleValidation }
        initialValues={{
          title: post.singlePost.title,
          body: post.singlePost.body
        }}
      >
        {props => <PostForm { ...props }/>}
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
EditPost.propTypes = {
  match: PropTypes.object.isRequired,
  getPostDetailAction: PropTypes.func.isRequired,
  updatePostAction: PropTypes.func.isRequired,
  getErrorsAction: PropTypes.func.isRequired
};


const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth
});

// Exports
//////////

export default connect(mapStateToProps, { getPostDetailAction, updatePostAction, getErrorsAction })(EditPost);
