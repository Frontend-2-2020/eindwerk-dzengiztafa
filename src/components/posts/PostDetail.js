// Imports
//////////

// Base dependencies
import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { deletePostAction, getPostDetailAction } from '../../redux/actions/postActions';

// Components
import { Spinner } from "../spinner/Spinner";

// Utils
import { isEmpty } from "../../utils/is-empty";


// PostDetail component
///////////////////////

const PostDetail = ({ match, getPostDetailAction, post, auth, deletePostAction }) => {

  const history = useHistory();

  useEffect(() => {
    getPostDetailAction(match.params.postId)
  },[match.params.postId, getPostDetailAction]);

  const handleDeleteClick = () => {
    deletePostAction(post.singlePost.id, history)
  };


  // Generate auth content
  let authContent;
  if(auth.isAuthenticated && !isEmpty(post.singlePost)) {
    if(post.singlePost.user.id === auth.user.id) {
      authContent = (
        <div>
          <Link to={`edit/${post.singlePost.id}`}
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

  // Generate content for the component
  let content;
  if(post.loading || isEmpty(post.singlePost)) {
    content = <Spinner />
  } else {
    const comments = post.singlePost.comments.map(comment => (
      <div className="card bg-light" key={comment.id}>
        <div className="card-header">
          <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-start align-items-center">
              <img src={comment.user.avatar} alt="commenter avatar" height="20px" className="mr-2"/>
              {`${comment.user.first_name} ${comment.user.last_name}`}
            </div>
            <div >
              {comment.created_at}
            </div>
          </div>
        </div>
        <div className="card-body" dangerouslySetInnerHTML={{__html: post.singlePost.body}}/>
      </div>
    ));
    content = (
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <div className="postUser">
            {`${post.singlePost.user.first_name} ${post.singlePost.user.last_name}`} - {post.singlePost.created_at}
          </div>
          {authContent}
        </div>
        <div className="card-body">
          <h5 className="card-title">{post.singlePost.title}</h5>
          <div dangerouslySetInnerHTML={{__html: post.singlePost.body}}/>
        </div>
        {comments}
      </div>
    )
  }

  return (
    <>
      {content}
    </>
  );
};


// Prop types for the component
PostDetail.propTypes = {
  match: PropTypes.object.isRequired,
  getPostDetailAction: PropTypes.func.isRequired,
  deletePostAction: PropTypes.func.isRequired,
};


// Map the Redux state to props
const mapStateToProps = state => ({
  post: state.post,
  errors: state.errors,
  auth: state.auth
});

export default connect(mapStateToProps, { getPostDetailAction, deletePostAction })(PostDetail);
