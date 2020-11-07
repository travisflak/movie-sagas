import React, { Component } from 'react';
import { connect } from 'react-redux';


class AddMovie extends Component {
    //create a local state
    state = {
        newMovie: {
            title: '',
            poster: '',
            description: ''
        }
    }

    handleChange = event => {
        console.log('new movie event')
        this.setState({
            newMovie: {
                ...this.state.newMovie,
                title: event.target.value,
                poster: event.target.value,
                description: event.target.value,
                genre: event.target.value,
            }
        });
    }

    addNewMovie = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_MOVIE', paylaod: this.state.newMovie })
        this.setState({
            newMovie: {
                title: '',
                poster: '',
                description: '',
                genre: '',
            }
        });
    }


    render() {
      return (
            <div>
                <h3>Movie List</h3>
                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.addNewMovie}>
                        <input type='text' placeholder='title' value={this.state.title} onChange={this.handleChange}/>
                        <input type='text' placeholder='poster' value={this.state.poster} onChange={this.handleChange}/>
                    <label>
                        description
                        <textarea value={this.state.description}onChange={this.handleChange} />
                    </label>    
                    <label>
                    Pick a genre:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="Adventure">Adventure</option>
                            <option value="Animated">Animated</option>
                            <option value="Biographical">Biographical</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Disaster">Disaster</option>
                            <option value="Drama">Drama</option>
                            <option value="Epic">Epic</option>
                            <option value="Fantasy">Fantasy</option>
                            <option value="Musical">Musical</option>
                            <option value="Romantic">Romantic</option>
                            <option value="Science Fiction">Science Fiction</option>
                            <option value="Space-Opera">Space-Opera</option>
                            <option value="Superhero">Superhero</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
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

// - an input field (for the movie title)
// - an input field (for the movie poster image URL))
// - a textarea (for the movie description)
// - a dropdown (for the genres)

// The Add Movie page should have the buttons:

// - `Cancel` button, which should bring the user to the Home/List Page
// - `Save` button, which should update the title and description in the database and bring the user to the Home/List Page (which now has the new movie)

// > Hint: Look at the /api/movie POST route -- it's been made already
// > Hint: You'll want to use the genres that are in the db for your dropdown