import React, { Component } from 'react';
import MovieList from './Components/MovieList/MovieList.jsx';
import MovieSearchForm from './Components/MovieSearchForm/MovieSearchForm.jsx';
import SearchResult from './Components/SearchResult/SearchResult.jsx';
import './normalize.css';
import style from './App.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      movies: [],
      searchTerm: '',
      result: {},
      newTitle: '',
      newPoster: '',
      newRating: '',
      newYear: ''
    }
  }

  getAllMovies(){
    fetch(`/movies`)
    .then(r=>r.json())
    .then((data) => {
      this.setState({
        movies: data
      })
    })
    .catch(err => console.log(err))
  }

  handleNewSearch(e) {
    this.setState({
      searchTerm: e.target.value
    })
    // renderAllMovies();
  }

  handleSubmitSearch(e) {
    fetch(`http://www.omdbapi.com/?t=${this.state.searchTerm}`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        newTitle: data.Title,
        newPoster: data.Poster,
        newRating: data.imdbRating,
        newYear: data.Year
      });
    console.log(data);
    })
    .catch(err => console.log(err))
  }

  postMovieToFavorites(e){
  return fetch(`/movies`, {
    headers: {
      'Content-Type': 'application/JSON'
    },
    method: 'POST',
    body: JSON.stringify(this.state.data)
  })
  .then(()=> this.getAllMovies());
  }

   handleDeletion(id){
    fetch(`/movies/${id}`, {
      method: 'delete'
    })
    .then(()=> {
      const movies = this.state.movies.filter((film)=> {
        return film.id !== id;
      })
      this.setState({
        movies : movies})
    })
    .catch(err=>console.log(err));
  }

  render() {
    return (
      <div id="mainContainer">
        <header>
          <h1>This is our haus. Take three. </h1>
        </header>
        <div>
          <MovieSearchForm
            searchTerm={this.state.searchTerm}
            handleNewSearch={event => this.handleNewSearch(event)}
            handleSubmitSearch={event => this.handleSubmitSearch(event)}
            postMovieToFavorites={event => this.postMovieToFavorites(event)}
          />
          <MovieList
            getAllMovies={this.getAllMovies.bind(this)}
            movies={this.state.movies}
            handleDeletion={this.handleDeletion.bind(this)}
          />
          <SearchResult
            newTitle={this.state.newTitle}
            newPoster={this.state.newPoster}
            newRating={this.state.newRating}
            newYear={this.state.newYear}
          />
        </div>
        <footer>
          <h5>Copyright & Contact info.</h5>
        </footer>
      </div>
    );
  }
}

export default App;
