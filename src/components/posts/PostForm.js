// Imports
//////////

// Base dependencies
import React from "react";

// Redux
import { connect } from "react-redux";

// Form handling
import { Form } from "formik";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// Components
import { FieldGroup } from "../common/FieldGroup";


// PostForm component
///////////////////////

const PostForm = ({ setFieldValue, values, errors }) => {
  return (
    <Form>
      <div className="form-group">

        {/* New Post */}
        <FieldGroup
          type="text" identifier="title" error={ errors.title }
          info="Please provide a title" placeholder="Some title" label="Provide a title"/>
      </div>
      <div className="form-group">
          <CKEditor
            editor={ ClassicEditor }
            data={ values.body }
            onChange={ ( event, editor ) => {
              const data = editor.getData();
              setFieldValue('body', data);
            }}
          />
      </div>
      <input type="submit" className="btn btn-info btn-block mt-4"/>
    </Form>
  )
};


// Map the Redux state to props
const mapStateToProps = state => ({
  errors: state.errors
});


// Exports
//////////

export default connect(mapStateToProps, null)(PostForm)