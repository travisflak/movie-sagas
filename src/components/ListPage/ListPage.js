import React, { Component } from 'react';
import { connect } from 'react-redux';


class ListPage extends Component {

    render() {
      return (
        <div className="ListPage">
          <h1>Movies!</h1>
          <buttton>Clicked Movie Poster</buttton>
        </div>
      );
    }
  }
  
  const mapReduxStateToProps = reduxState => ({
    reduxState
  });
  
  export default connect(mapReduxStateToProps)(ListPage);