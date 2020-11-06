import React, { Component } from 'react';
import { connect } from 'react-redux';


class Details extends Component {

    render() {
      return (
        <div className="Details">
          <h1>Movies!</h1>
          <buttton>Back to List</buttton>
        </div>
      );
    }
  }
  
  const mapReduxStateToProps = reduxState => ({
    reduxState
  });
  
  export default connect(mapReduxStateToProps)(Details);