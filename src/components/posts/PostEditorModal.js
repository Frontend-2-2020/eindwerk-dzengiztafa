// Imports
//////////

// Base dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Redux
import { connect } from "react-redux";

// Components
import PostForm from "./PostForm";

// Form handling
import { validateNewPostInput } from "../../validation/post";
import { Formik } from "formik";

// ReactStrap
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { getErrorsAction } from "../../redux/actions/errorActions";
import { createPostAction } from "../../redux/actions/postActions";


// Dead Modal
/////////////

const PostEditorModal = ({ getErrorsAction, createPostAction, initialTitle, toggleModal, modalOpen }) => {

  // Generate the initialNewPostValues
  const initialNewPostValues = {
    title: initialTitle,
    body: "What's on your <strong>mind</strong>?"
  };

  // Function to handle the sumbit of the form data
  const handleFormSubmit = (postInfo, { resetForm }) => {

    // Generate the post data
    const newPostData = {
      title: postInfo.title,
      body: postInfo.body
    };

    // Fire up the action to create a post
    createPostAction(newPostData);

    // Reset the form
    resetForm({
      ...initialNewPostValues
    });

    toggleModal()
  };

  // Function to handle the validation of the form
  const handleValidation = input => {
    const errors = validateNewPostInput(input);

    // Trigger the redux action to get the errors
    getErrorsAction(errors);

    // Return the errors to formik
    return errors
  };

  return (
    <Modal isOpen={ modalOpen } toggle={ () => toggleModal(!modalOpen) } backdrop="static">

      {/* Modal Header */}
      <ModalHeader toggle={ () => toggleModal(!modalOpen) }>
        <span className="modalHeader">Create a new post</span>
      </ModalHeader>

      {/* Modal body */}
      <ModalBody>
        <Formik
          onSubmit={ handleFormSubmit }
          validate={ handleValidation }
          initialValues={{
            ...initialNewPostValues
          }}
        >
          {props => <PostForm { ...props }/>}
        </Formik>
      </ModalBody>

      {/* Modal Footer */}
      <ModalFooter className="deadModalButtons">

        <Link to="/posts" className="btn btn-info" onClick={toggleModal}>
          Go back
        </Link>
      </ModalFooter>
    </Modal>
  );
};


// Prop types for the component
PostEditorModal.propTypes = {
  getErrorsAction: PropTypes.func.isRequired,
  createPostAction: PropTypes.func.isRequired,
  initialTitle: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  modalOpen: PropTypes.bool.isRequired,

};


// Map the redux state to props
const mapStateToProps = (state) => ({
  post: state.post
});


// Exports
//////////

export default connect(mapStateToProps, { getErrorsAction, createPostAction })(PostEditorModal);
