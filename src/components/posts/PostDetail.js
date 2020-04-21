// Imports
//////////

// Base dependencies
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { getPostDetailAction } from '../../redux/actions/postActions';


// PostDetail component
///////////////////////

const PostDetail = ({ match, getPostDetailAction }) => {

  useEffect(() => {
    getPostDetailAction(match.params.postId)
  },[match.params.postId]);

  return (
    <div>
      <h1>PostDetail</h1>
    </div>
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