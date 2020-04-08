// Imports
//////////

// Base dependencies
import React, {useEffect} from "react";
import PropTypes from "prop-types";

// Redux
import {connect} from "react-redux";
import {getAllPostsAction} from "../../redux/actions/postActions";

// Components
import { Spinner } from "../spinner/Spinner";
import { PostIntro } from "./PostIntro";
import PostCreate from "./PostForm";

// Utils
import { isEmpty } from "../../utils/is-empty";
import LoginForm from "../auth/LoginForm";
import {Formik} from "formik";
import Login from "../auth/Login";
import PostForm from "./PostForm";



// Posts component
//////////////////

const Posts = ({ auth, post, errors, getAllPostsAction }) => {

  // When the component loads, fetch all the posts
  useEffect(() => {
    getAllPostsAction();
  }, [getAllPostsAction]);

  // Function to handle the submit data. This will trigger a redux action
  const handleSubmit = data => {
    console.log('handling submit');
    console.log(data);
  };

  // Function to handle the validation of the input.
  const handleValidation = input => {
    console.log('handling validation');
    console.log(input);
  };

  // New form content
  const newForm = (
    <div className="mb-4">
      <Formik
        onSubmit={handleSubmit}
        validate={handleValidation}
        initialValues={{
          newPost: ""
        }}
      >
        <PostForm />
      </Formik>
    </div>
  );

  // Generate content
  let content;
  if (post.loading || isEmpty(post.batchPosts)) {
    content = <Spinner />
  } else {
    content = post.batchPosts.data.map(post => (
      <PostIntro
        content={ post.body } user={ post.user_id } createdAt={ post.created_at }
        title={ post.title } comments={ post.comments_count }
      />
    ))
  }

  return (
    <div>
      { auth.isAuthenticated ? newForm : "" }

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