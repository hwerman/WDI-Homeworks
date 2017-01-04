import React, { Component } from 'react';
import './MovieSearchForm.css';

class MovieSearchForm extends Component {
  render(){
    console.log(this.props)
    console.log(this.postMovieToFavorites)
    return(
      <div id="searchContainer">
        <input
          type="text"
          value={this.props.searchTerm}
          onChange={this.props.handleNewSearch}
          placeholder="Type movie title here"
        />
        <button onClick={this.props.handleSubmitSearch}>
          Search Movies
        </button>
        <button id="add" onClick={this.props.postMovieToFavorites}>
          Add to Database
        </button>
      </div>
    )
  }
}

export default MovieSearchForm;
