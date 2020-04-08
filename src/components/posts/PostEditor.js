// Imports
//////////

// Base dependencies
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// CKEditor
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-react";


// PostEditor component
///////////////////////

export const PostEditor = ({ handleSubmit }) => {

  // State handling
  const [input, setInput] = useState('');

  return (
    <div style={{ margin: "3em" }}>
      <h5>New Post</h5>
      <CKEditor
        editor={ ClassicEditor }
        data=""
        onInit={ editor => {
          console.log( 'Editor is ready to use!', editor );
        } }
        onChange={ ( event, editor ) => {
          const data = editor.getData();
          setInput(data);
        } }
        onBlur={ ( event, editor ) => {
          console.log( 'Blur.', editor );
        } }
        onFocus={ ( event, editor ) => {
          console.log( 'Focus.', editor );
        } }
      />
      <button className="btn btn-info btn-block mt-4" onClick={ () => handleSubmit(input) }>Submit</button>
    </div>
  );
};


// Prop types for the component
PostEditor.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};