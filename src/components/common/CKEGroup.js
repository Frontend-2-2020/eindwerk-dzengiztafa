// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';


// Form handling
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-react";


// CKEGroup component
/////////////////////

const CkeGroup = ({ values, setFieldValue, info, error }) => {
  return (
    <div>
      <div className='pt-0' style={{ padding: '1px', border: error ? '1px solid red' : '' }}>
        <CKEditor
          editor={ ClassicEditor }
          data={ values.body }
          onChange={ ( event, editor ) => {
            const data = editor.getData();
            setFieldValue('body', data);
          }}
          config={{
            mediaEmbed: {
              previewsInData: true
            }
          }}
        />
      </div>
      <small className="form-text text-muted">{ info }</small>
    </div>
  );
};


// Prop types for the component
CkeGroup.propTypes = {
  values: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  info: PropTypes.string.isRequired,
  error: PropTypes.string,
};


// Exports
//////////

export default CkeGroup;
