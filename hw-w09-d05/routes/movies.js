const db =            require('../models/movie.js');
const movies =        require('express').Router();
const { getAllMovies,
        postMovieToFavorites,
        deleteMovie,
      } =  require('../models/movie');

movies.route('/')
  .get(db.getAllMovies, (req, res) => res.json(res.results))
  .post(db.postMovieToFavorites, (req, res) => res.json({message: 'success'}));

movies.route('/:id')
  .delete(db.deleteMovie, (req, res) => res.json({message: 'success'}));

module.exports = movies;
