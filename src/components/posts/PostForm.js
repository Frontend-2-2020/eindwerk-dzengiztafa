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


// PostForm component
///////////////////////

const PostForm = ({ errors }) => {
  return (
    <Form>
      <div className="form-group">

        {/* New Post */}
        <FieldGroup
          type="text" identifier="title" error={ errors.postBody }
          info="Please provide a title" placeholder="Some title" label="Provide a title"/>

        <input type="submit" className="btn btn-info btn-block mt-4"/>
      </div>
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