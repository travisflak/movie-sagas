import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
// Components
import AddMovie from '../AddMovie/AddMovie.js';
import Details from '../Details/Details.js';
import ListPage from '../ListPage/ListPage.js';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>
          <div>
            {/* ADD PAGES! */}
            <Route exact path= "/" component ={ListPage} />
            <Route path="/Details" component ={Details}/>
            <Route path="/AddMovie" component ={AddMovie}/>
          </div>
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
