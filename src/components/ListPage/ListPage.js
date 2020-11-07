import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddMovie from '../AddMovie/AddMovie';


class ListPage extends Component {

    render() {
        
      return (
        <>
        <pre>{JSON.stringify(this.props.reduxState)}</pre>
          {this.props.reduxState.movies.map((movie) => {
              return <img src={movie.poster} />
          })}
        </>
      );
    }
  }
  
  const mapReduxStateToProps = reduxState => ({
    reduxState
  });
  
  export default connect(mapReduxStateToProps)(ListPage);