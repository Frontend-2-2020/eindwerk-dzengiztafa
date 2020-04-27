// Imports
//////////

// Base dependencies
import React from 'react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-react";
import {ErrorMessage, Field} from "formik";
import PropTypes from 'prop-types';
import classnames from "classnames";


// CKEGroup component
/////////////////////

const CkeGroup = ({ values, setFieldValue, info, error, identifier }) => {

  console.log(error);

  return (
    <div>
      <CKEditor
        editor={ ClassicEditor }
        data={ values.body }
        onChange={ ( event, editor ) => {
          const data = editor.getData();
          setFieldValue('body', data);
        }}
      />
      <small className="form-text text-muted">{ info }</small>
      {error && <div className="invalid-feedback">{ error }</div>}
    </div>
  );
};

CkeGroup.propTypes = {
  values: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  info: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired,
  error: PropTypes.string,
};


// Exports
//////////

export default CkeGroup;
