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

const PostEditor = ({ handleSubmit }) => {

  // State handling
  const [input, setInput] = useState('');

  return (
    <div style={{ margin: "2em" }}>
      <CKEditor
        editor={ ClassicEditor }
        data="<p>What's on your mind?</p>"
        onInit={ editor => {
          // You can store the "editor" and use when it is needed.
          console.log( 'Editor is ready to use!', editor );
        } }
        onChange={ ( event, editor ) => {
          const data = editor.getData();
          console.log( { event, editor, data } );
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

// Exports
//////////

export default PostEditor;