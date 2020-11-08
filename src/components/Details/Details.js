import React, { Component } from 'react';
import { connect } from 'react-redux';


class Details extends Component {

    render() {
        const movies = this.props.reduxState.movies ? this.props.reduxState.movies : [];
      return (
        <>
          {movies.map((movie) => {
              return <p>{movie.description} </p>
          })}
        </>
      );
    }
  }
  
  const mapReduxStateToProps = reduxState => ({
    reduxState
  });
  
  export default connect(mapReduxStateToProps)(Details);