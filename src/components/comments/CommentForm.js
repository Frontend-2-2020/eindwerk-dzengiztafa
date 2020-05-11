// Imports
//////////

// Base dependencies
import React from "react";

// Redux
import { connect } from "react-redux";

// Form handling
import { Form } from "formik";

// Components
import CkeGroup from "../common/CKEGroup";


// PostForm component
///////////////////////

const CommentForm = ({ setFieldValue, values, errors }) => {
  return (
    <Form>
      <div className="form-group">
        <CkeGroup
          setFieldValue={ setFieldValue } values={ values } error={ errors.body }
          info="Please add a comment to the post. Insert plain text or use html"
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

export default connect(mapStateToProps, null)(CommentForm)
