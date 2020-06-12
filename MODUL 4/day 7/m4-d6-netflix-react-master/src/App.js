import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import MovieDetails from "./components/MovieDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      harryPotterMovies: [],
      spiderManMovies: [],
      starWarsMovies: [],
      searchedMovies: [],
      loading: true,
      error: false,
      comments: [],
    };
  }

  render() {
    return (
        <Router>
            <Navbar showSearchResult={this.showSearchResult} />
            <Route path="/" exact component={Home} />
            <Route path="/movieDetails" exact component={MovieDetails} />
        </Router>
    );
  }
}

export default App;
