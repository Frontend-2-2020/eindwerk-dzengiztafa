// Imports
//////////

// Base dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


// PostIntro component
//////////////////////

export const PostIntro = ({ title, createdAt, user, content, comments, postId }) => {
  return (
    <div className="card mb-4">
      <div className="card-header">
        <div className="d-flex justify-content-between">
          <div>{ title }</div>
          <div>{ createdAt }</div>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{ user }</h5>
        <div dangerouslySetInnerHTML={{__html: content}}/>
        {/*<p className="card-text">{ content.substring(0, 100) + "..." }</p>*/}
        <div className="d-flex justify-content-between align-items-end">
          <span className="badge badge-secondary">{ comments + " comments" }</span>
          <Link to={`/post/${postId}`} className="btn btn-info btn-sm">Read more</Link>
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
};