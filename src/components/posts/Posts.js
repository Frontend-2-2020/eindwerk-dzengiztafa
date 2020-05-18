// Imports
//////////

// Base dependencies
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { getAllPostsAction } from "../../redux/actions/postActions";

// Components
import { Spinner } from "../spinner/Spinner";
import PostIntro from "./PostIntro";
import Pagination from "../pagination/Pagination";
import PostEditorModal from "./PostEditorModal";

// Utils
import { isEmpty } from "../../utils/is-empty";

// Posts component
//////////////////

const Posts = ({ auth, post, getAllPostsAction }) => {

  // State handling
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Modal toggler
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  // When the component loads, fetch all the posts
  useEffect(() => {
    getAllPostsAction(page);
  }, [getAllPostsAction, page]);


  useEffect(() => {
    if(post.batchPosts) {
      setData(post.batchPosts);
    }
  },[post.batchPosts]);

  // Decrement page handler
  const decrementPage = () => { page > 1 && setPage(page - 1) };

  // Increment page handler
  const incrementPage = () => { page < data.last_page && setPage(page + 1) };

  // Set first page handler
  const setPageBegin = () => { setPage(1) };

  // Set last page handler
  const setPageEnd = () => { setPage(data.last_page) };

  // Set page number handler
  const selectPage = (value) => {
    (Math.abs(value) <= data.last_page)
      ? setPage(Math.abs(value))
      : setPage(data.last_page)
  };


  // Generate content
  let content;
  if (post.loading || isEmpty(post.batchPosts)) {
    content = <Spinner />
  } else {
    content = post.batchPosts.data.map(post => (
      <PostIntro
        content={ post.body } user={post.user} createdAt={ post.created_at }
        title={ post.title } comments={ post.comments_count } key={ post.id } postId={ post.id }
      />
    ))
  }

  return (
    <div>
      {auth.isAuthenticated &&
        <div className="d-flex justify-content-center align-items-center m-4">
          <button className="btn btn-outline btn-info" onClick={toggleModal}>Add a post</button>
        </div>
      }

      {content}

      {post.batchPosts &&
        <Pagination data={data} decrementPage={decrementPage} incrementPage={incrementPage}
         setPageEnd={setPageEnd} setPageBegin={setPageBegin} selectPage={selectPage}
        />
      }

      <PostEditorModal initialTitle="" modalOpen={modalOpen} toggleModal={() => setModalOpen(!modalOpen)}/>

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
