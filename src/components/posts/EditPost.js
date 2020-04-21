// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';


// EditPost component
/////////////////////

const EditPost = ({ match }) => {
  return (
    <div>
      <h1>Editing post with id {match.params.postId}</h1>
    </div>
  );
};


// Prop types for the component
EditPost.propTypes = {
  match: PropTypes.object.isRequired,
};


// Exports
//////////

export default EditPost;