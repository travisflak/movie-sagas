import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListPage extends Component {

    handleChange = (idMovie) => {
        this.props.history.push(`/details/${idMovie}`);
    }

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