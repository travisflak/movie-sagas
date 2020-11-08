import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListPage extends Component {

    render() {
        const movies = this.props.reduxState.movies ? this.props.reduxState.movies : [];
      return (
        <>
          {movies.map((movie) => {
              return<><img src={movie.poster} />
              <p>{movie.description} </p></>
          })}
        </>
      );
    }
  }
  
  const mapReduxStateToProps = reduxState => ({
    reduxState
  });
  
  export default connect(mapReduxStateToProps)(ListPage);