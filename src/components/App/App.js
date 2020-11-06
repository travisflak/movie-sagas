import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
// Components
import Details from '../Details/Details.js';
// import AddMovie from '../AddMovie/AddMovie.js';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>
          {/* ADD PAGES! */}
        </Router>
        <p>Empty Page</p>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);
