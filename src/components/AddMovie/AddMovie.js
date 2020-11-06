import React, { Component } from 'react';
import { connect } from 'react-redux';


class AddMovie extends Component {
    //create a local state
    state = {
        addingMovie: ''
    }

    handleChange = event => {
        console.log('event happended')
        this.setState({
            addingMovie: {
                addingMovie: event.target.value,
            }
        });
    }

    render() {
      return (
        <div className="AddMovie">
          <h1>Movies!</h1>
          <input>Movie Title</input>
          <input>Poster Image</input>
          <p>Text Area</p>
          <form onSubmit={this.handleSubmit}>
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
          <buttton>Cancel</buttton>
          <buttton>Save</buttton>
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