// Imports
//////////

import React, {Component} from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';


// Component
////////////

class Landing extends Component {

  // Lifecycle method to check for an authenticated user
  // when the component has mounted. If authenticated
  // just redirect to the dashboard
  componentDidMount(){
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div className="landing">
        <h1>Some Landing page</h1>
      </div>
    );
  }
}


// Helper methods
/////////////////

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});


// Exports
//////////

export default connect(mapStateToProps)(Landing);