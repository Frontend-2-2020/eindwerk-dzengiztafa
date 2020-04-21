// Imports
//////////

// Base dependencies
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { createPostAction } from "../../redux/actions/postActions";
import { getErrorsAction } from "../../redux/actions/errorActions";

// Form handling
import { Formik } from "formik";
import { validateNewPostInput } from "../../validation/post";

// CKEditor
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-react";
import PostForm from "./PostForm";


// PostEditor component
///////////////////////

const PostEditor = ({ getErrorsAction, createPostAction, initialTitle }) => {

  // State handling
  const [input, setInput] = useState('');

  //
  const handleFormSubmit = postInfo => {
    console.log('trying to submit new post');
    const newPostData = {
      title: postInfo.title,
      body: input
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
        }}
      >
        <div>
          <div className="mb-2">
            <CKEditor

              editor={ ClassicEditor }
              data=""
              onInit={ editor => {
                console.log( 'Editor is ready to use!', editor );
              } }
              onChange={ ( event, editor ) => {
                const data = editor.getData();
                setInput(data);
              } }
              onBlur={ ( event, editor ) => {
                console.log( 'Blur.', editor );
              } }
              onFocus={ ( event, editor ) => {
                console.log( 'Focus.', editor );
              } }
            />
          </div>
          <PostForm />
        </div>
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