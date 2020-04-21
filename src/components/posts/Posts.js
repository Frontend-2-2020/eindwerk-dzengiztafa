// Imports
//////////

// Base dependencies
import React, {useEffect} from "react";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { getAllPostsAction } from "../../redux/actions/postActions";

// Components
import { Spinner } from "../spinner/Spinner";
import { PostIntro } from "./PostIntro";
import PostEditor from "./PostEditor";

// Utils
import { isEmpty } from "../../utils/is-empty";

// Posts component
//////////////////

const Posts = ({ auth, post, errors, getAllPostsAction, createPostAction }) => {

  // When the component loads, fetch all the posts
  useEffect(() => {
    getAllPostsAction();
  }, [getAllPostsAction]);

  // Function to handle the submit of the CKE formdata
  const handleSubmit = (data) => {
    // console.log('submitting cke data');
    // console.log(data);
    createPostAction();
  };

  // Generate content
  let content;
  if (post.loading || isEmpty(post.batchPosts)) {
    content = <Spinner />
  } else {
    content = post.batchPosts.data.map(post => (
      <PostIntro
        content={ post.body } user={ post.user_id } createdAt={ post.created_at }
        title={ post.title } comments={ post.comments_count } key={ post.id }
      />
    ))
  }

  return (
    <div>
      { auth.isAuthenticated && <PostEditor handleSubmit={handleSubmit}/> }
      { content }
    </div>
  );
};


// Prop types for the component
Posts.propTypes = {
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  getAllPostsAction: PropTypes.func.isRequired,
};


// Map the redux state to props
const mapStateToProps = state => ({
  auth: state.auth,
  post: state.post,
  errors: state.errors
});


// Exports
//////////

export default connect(mapStateToProps, { getAllPostsAction })(Posts);