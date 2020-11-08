import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListPage extends Component {
    //handle change to push the movie details
    handleChange = (idMovie) => {
        this.props.history.push(`/details/${idMovie}`);
    }
//render movies to the DOM
    render() {
        const movies = this.props.reduxState.movies ? this.props.reduxState.movies : [];
      return (
        <>
          {movies.map((movie) => {
              return<><img src={movie.poster}onClick={() => this.handleChange(movie.id)}/>
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