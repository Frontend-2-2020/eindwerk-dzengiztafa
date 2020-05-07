// Imports
//////////

// Base dependencies
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { getPostDetailAction } from '../../redux/actions/postActions';
import {Spinner} from "../spinner/Spinner";
import {isEmpty} from "../../utils/is-empty";


// PostDetail component
///////////////////////

const PostDetail = ({ match, getPostDetailAction, post }) => {

  useEffect(() => {
    getPostDetailAction(match.params.postId)
  },[match.params.postId]);

  // Generate content for the component
  let content;
  if(post.loading || isEmpty(post.singlePost)) {
    content = <Spinner />
  } else {
    const comments = post.singlePost.comments.map(comment => (
      <div className="card bg-light">
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
          <div className="postUser">{`${post.singlePost.user.first_name} ${post.singlePost.user.last_name}`}</div>
          <div className="postCreated">{post.singlePost.created_at}</div>

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
};


// Map the Redux state to props
const mapStateToProps = state => ({
  post: state.post,
  errors: state.errors,
  auth: state.auth
});

export default connect(mapStateToProps, { getPostDetailAction })(PostDetail);
