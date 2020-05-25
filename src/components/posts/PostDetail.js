// Imports
//////////

// Base dependencies
import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { deletePostAction, getPostDetailAction } from "../../redux/actions/postActions";

// Components
import { Spinner } from "../spinner/Spinner";

// Utils
import { isEmpty } from "../../utils/is-empty";
import Comment from "../comments/Comment";
import CommentEditorModal from "../comments/CommentEditorModal";


// PostDetail component
///////////////////////

const PostDetail = ({ match, getPostDetailAction, post, auth, deletePostAction }) => {

  const history = useHistory();

  // State handling
  const [modalOpen, setModalOpen] = useState(false);

  // Modal toggler
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

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
          <Link to={ `/edit/${post.singlePost.id}` }
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

  // Generate content for the component
  let content;
  if(post.loading || isEmpty(post.singlePost)) {
    content = <Spinner />
  } else {
    const comments = post.singlePost.comments.map(comment => (
      <Comment comment={ comment }  key={ comment.id } postId={ post.singlePost.id }/>
    ));
    content = (
      <div>
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <div className="postUser">
              <img src={post.singlePost.user.avatar} alt="user avatar" height="20px" className="mr-2"/>
              { `${post.singlePost.user.first_name } ${ post.singlePost.user.last_name }`} - { post.singlePost.created_at }
            </div>
            {authContent}
          </div>
          <div className="card-body">
            <h5 className="card-title">{ post.singlePost.title }</h5>
            <div dangerouslySetInnerHTML={{ __html: post.singlePost.body }}/>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items center m-4">
          <button className="btn btn-outline-info" onClick={ toggleModal }>Add a comment</button>
        </div>

        <CommentEditorModal postId={ post.singlePost.id } toggleModal={ toggleModal } modalOpen={ modalOpen }/>

        { comments }
      </div>

    )
  }

  return (
    <>
      { content }
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


// Exports
//////////

export default connect(mapStateToProps, { getPostDetailAction, deletePostAction })(PostDetail);
