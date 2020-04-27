// Imports
//////////

// Base dependencies
import React from "react";

// Redux
import { connect } from "react-redux";

// Form handling
import { Form } from "formik";

// Components
import { FieldGroup } from "../common/FieldGroup";
import CkeGroup from "../common/CKEGroup";


// PostForm component
///////////////////////

const PostForm = ({ setFieldValue, values, errors }) => {
  return (
    <Form>
      <div className="form-group">

        {/* New Post */}
        <FieldGroup
          type="text" identifier="title" error={ errors.title }
          info="Please provide a title" placeholder="Some title" />
      </div>
      <div className="form-group">
          <CkeGroup
            setFieldValue={ setFieldValue } values={ values } error={ errors.body }
            info="Please share what's on your mind. Insert plain text or use html"
          />
        { errors && <small className="text-danger">{ errors.body }</small> }
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
