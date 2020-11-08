import React, { Component } from 'react';
import { connect } from 'react-redux';


class AddMovie extends Component {
    //create a local state
    state = {
        newMovie: {
            title: '',
            poster: '',
            description: '',
            name: ''
        }
    }

    componentDidMount = () => {
        this.getGenres()
    }
    //handle change event
    handleChange = (event, type) => {
        console.log('new movie event')
        this.setState({
            newMovie: {
                ...this.state.newMovie,
                [type]: event.target.value,
                // poster: event.target.value,
                // description: event.target.value,
                // name: event.target.value,
            }
        });
    }
    //adding a new movie
    addNewMovie = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_MOVIE', paylaod: this.state.newMovie })
        this.setState({
            newMovie: {
                title: '',
                poster: '',
                description: '',
                name: '',
            }
        });
    }
    //fetch genres from router query in genre.router
    getGenres = () => {
        this.props.dispatch({type: 'FETCH_GENRES'})
    }
    //on click function for save button
    saveMovie = ( event ) => { 

        if(this.state.saveMovie === true) {
            
        }
          else {            
            this.props.dispatch ({
            type: 'ADD_MOVIE',
            payload: this.state.newMovie
        })
          this.props.history.push('/')
        }
    }
    //on click function for cancel button
    cancelMovie = ( event ) => { 

        if(this.state.cancelMovie === true) {
                
        }
          else {            
            this.props.dispatch ({
            type: 'CANCEL_MOVIE',
            payload: this.state.cancelMovie
        })
            this.props.history.push('/')
        }
    }


    render() {
      return (
            <div>
                <h3>Movie List</h3>
                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.addNewMovie}>
                        <input type='text' placeholder='title' value={this.state.title} onChange={(event) => this.handleChange(event, 'title')}/>
                        <input type='text' placeholder='poster' value={this.state.poster} onChange={(event) => this.handleChange(event, 'poster')}/>
                    <label>
                        description
                        <textarea value={this.state.description}onChange={(event) => this.handleChange(event, 'description')} />
                    </label>    
                    <label>
                    Pick a genre:
                        <select value={this.state.value} onChange={(event) => this.handleChange(event, 'genre')}>
                            {this.props.reduxState.genres.map((genre) => {
                            return <option value={genre.id}>{genre.name}</option> 
                            })}
                        </select>
                    </label>
                </form>
                <button onClick={this.saveMovie}>Save</button>
                <button onClick={this.cancelMovie}>Cancel</button>
            </div>
      );
    }
  }
  
  const mapReduxStateToProps = reduxState => ({
    reduxState
  });
  
  export default connect(mapReduxStateToProps)(AddMovie);

//   This should show:

// x- an input field (for the movie title)
// x- an input field (for the movie poster image URL))
// x- a textarea (for the movie description)
// x- a dropdown (for the genres)

// The Add Movie page should have the buttons:

// - `Cancel` button, which should bring the user to the Home/List Page
// - `Save` button, which should update the title and description in the database and bring the user to the Home/List Page (which now has the new movie)

// x> Hint: Look at the /api/movie POST route -- it's been made already
// >x Hint: You'll want to use the genres that are in the db for your dropdown