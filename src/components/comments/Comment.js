// Imports
//////////

// Base dependencies
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { removeCommentAction } from "../../redux/actions/commentActions";


// Comment component
////////////////////

const Comment = ({ comment, auth, removeCommentAction, postId }) => {

  const handleDeleteClick = () => {
    removeCommentAction(comment.id, postId)
  };

  let authContent;
  if(auth.isAuthenticated) {
    if(comment.user_id === auth.user.id) {
      authContent = (
        <div>
          <Link
            to={ `/editComment/${comment.id}` }
            className="btn btn-info btn-sm btn-warning ml-2"
          >
            <i className="far fa-edit"/>
          </Link>
          <button
            onClick={ handleDeleteClick }
            className="btn btn-info btn-sm btn-danger ml-2"
          >
            <i className="fas fa-trash-alt"/>
          </button>
        </div>
      )
    }
  }

  return (
    <div className="card bg-secondary">
      <div className="card-header">
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-start align-items-center">
            <img src={ comment.user.avatar } alt="commenter avatar" height="20px" className="mr-2"/>
            { `${comment.user.first_name } ${ comment.user.last_name}` } - { comment.created_at }
          </div>
          <div >
            {authContent}
          </div>
        </div>
      </div>
      <div className="card-body" dangerouslySetInnerHTML={{ __html: comment.body }}/>
    </div>
  );
};


// Prop types for the component
Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  removeCommentAction: PropTypes.func.isRequired,
  postId: PropTypes.number.isRequired,
};


// Map the Redux state to props
const mapStateToProps = state => ({
  auth: state.auth,
  post: state.post
});


// Exports
//////////

export default connect(mapStateToProps, { removeCommentAction })(Comment);
