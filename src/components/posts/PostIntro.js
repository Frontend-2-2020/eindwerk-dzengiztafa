// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';


// PostIntro component
//////////////////////

export const PostIntro = ({ title, createdAt, user, content, comments }) => {
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
        <p className="card-text">{ content.substring(0, 100) + "..." }</p>
        <div className="d-flex justify-content-between align-items-end">
          <span className="badge badge-secondary">{ comments + " comments" }</span>
          <a href="#" className="btn btn-info btn-sm">Read more</a>
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
};