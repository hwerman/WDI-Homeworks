import React, { Component } from 'react';
import style from './MovieList.css'
import MovieItem from '../MovieItem/MovieItem.jsx';

class MovieList extends Component {

  renderAllMovies(){
    return this.props.movies.map((movie, index) =>
      <MovieItem
        key={index}
        id={movie.id}
        title={movie.title}
        year={movie.year}
        poster={movie.poster}
        rating={movie.imdbrating}
        handleDeletion={this.props.handleDeletion}
       />
    )
  }

  componentWillMount(){
    this.props.getAllMovies();
  }

  render(){
    return (
      <div id="movieListContainer">
        {this.renderAllMovies()}
      </div>
    )
  }
}

export default MovieList;
