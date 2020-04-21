// Imports
//////////

// Base dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { deletePostAction } from "../../redux/actions/postActions";

// PostIntro component
//////////////////////

const PostIntro = ({ auth, title, createdAt, user, content, comments, postId, deletePostAction }) => {

  // Handler to delete a post
  const handleDeleteClick = () => {
    deletePostAction(postId)
  };

  let authContent;
  if(auth.isAuthenticated) {
    if(user === auth.user.id) {
      authContent = (
          <div>
            <Link to={`edit/${postId}`}
              className="btn btn-info btn-sm btn-warning ml-2"
            >
              <i className="far fa-edit"/>
            </Link>
            <button
              onClick={handleDeleteClick}
              className="btn btn-info btn-sm btn-danger ml-2"
            >
              <i className="fas fa-trash-alt"/>
            </button>
          </div>
        )
    }
  }



  return (
    <div className="card mb-4">
      <div className="card-header">
        <div className="d-flex justify-content-between">
          <div>{ title } - { createdAt }</div>
          { authContent }
        </div>
      </div>
      <div className="card-body">
        <div className="d-flex">
          <h5 className="card-title align-self-start">{ user }</h5>
        </div>
        <div dangerouslySetInnerHTML={{__html: content}}/>
        {/*<p className="card-text">{ content.substring(0, 100) + "..." }</p>*/}
        <div className="d-flex justify-content-between align-items-end">
          <span className="badge badge-secondary">{ comments + " comments" }</span>
          <div>
            <Link to={`/post/${postId}`} className="btn btn-info btn-sm">Read more</Link>
          </div>
        </div>
      </div>
    </div>
  );
};


// Prop types for the component
PostIntro.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  user: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
  postId: PropTypes.number.isRequired,
  deletePostAction: PropTypes.func.isRequired,
};


// Map the Redux state to props
const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth
});

export default connect(mapStateToProps, { deletePostAction })(PostIntro);
