import React, { Component } from 'react';
import { connect } from 'react-redux';


class AddMovie extends Component {

    render() {
      return (
        <div className="AddMovie">
          <h1>Movies!</h1>
          <input>Movie Title</input>
          <input>Poster Image</input>
          <p>Text Area</p>
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