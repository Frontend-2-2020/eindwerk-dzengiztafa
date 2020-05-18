// Imports
//////////

// Base dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Redux
import { connect } from "react-redux";

// Comments
import CommentForm from "./CommentForm";

// Form handling
import { validateNewCommentInput } from "../../validation/comment";
import { Formik } from "formik";

// ReactStrap
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { getErrorsAction } from "../../redux/actions/errorActions";
import { addCommentAction } from "../../redux/actions/postActions";


// Dead Modal
/////////////

const CommentEditorModal = ({ getErrorsAction, addCommentAction, postId, toggleModal, modalOpen }) => {

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
    });

    toggleModal()
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
    <Modal isOpen={ modalOpen } toggle={ () => toggleModal(!modalOpen) } backdrop="static">

      {/* Modal Header */}
      <ModalHeader toggle={ () => toggleModal(!modalOpen) }>
        <span className="modalHeader">Add a comment</span>
      </ModalHeader>

      {/* Modal body */}
      <ModalBody>
        <Formik
          onSubmit={ handleFormSubmit }
          validate={ handleValidation }
          initialValues={{
            ...initialCommentValues
          }}
        >
          {props => <CommentForm { ...props }/>}
        </Formik>
      </ModalBody>

      {/* Modal Footer */}
      <ModalFooter className="deadModalButtons">
        <Link to="/posts" className="btn btn-info" onClick={ toggleModal }>
          Go back
        </Link>
      </ModalFooter>
    </Modal>
  );
};


// Prop types for the component
CommentEditorModal.propTypes = {
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

export default connect(mapStateToProps, { getErrorsAction, addCommentAction })(CommentEditorModal);
