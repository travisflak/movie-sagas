import React, { Component } from 'react';
import { connect } from 'react-redux';


class Details extends Component {

    state = {
        details: [],
        genres: []
    } 

    componentDidMount = () => {
        this.getDetails();
        this.getGenres();
        this.setState({
            details: this.props.reduxState.details ? this.props.reduxState.details : [],
            genres: this.props.reduxState.genres ? this.props.reduxState.genres : []
        })
    }

    getDetails = () => {
        this.props.dispatch({type: 'GET_DETAILS', payload: this.props.match.params.id});
    }
    getGenres = () => {
        this.props.dispatch({type: 'FETCH_GENRES'});
    }

    getGenreIndex = (genres, genreTag) => {
        for(let genre of genres) {
            if (genre.id === genreTag.genres_id) {
                return genres.indexOf(genre);
            }
        }
    }
    //button to send the user back to the home page
    backBtn = (event) => {
        this.props.history.push('/')
    }

    render() {
        const movies = this.props.reduxState.movies ? this.props.reduxState.movies : [];
      return (
        <>
            <p>{movies[0].description}</p>
            <button onClick={this.backBtn}>Back</button>
            {console.log('checking', this.props)}
            
            {this.state.details.map((genreTag) => {
              return <p>{this.state.genres[this.getGenreIndex(this.state.genres, genreTag)].name}</p>
          })}
        </>
      );
    }
  }
  //<p>{movies[this.props.match.params.id-1].description}</p>
  const mapReduxStateToProps = reduxState => ({
    reduxState
  });
  
  export default connect(mapReduxStateToProps)(Details);