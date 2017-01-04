const db =            require('../models/home');
const movies =        require('express').Router();
const { getAllMovies,
        postMovieToFavorites,
        // putUpdatesToMovie
        deleteMovie,
      } =  require('../models/home');

// movies.route('/:id')
//   .get(getOneMovie, (req, res) => res.json(res.oneMovie)
// );

movies.route('/')
  .get(db.getAllMovies, (req, res) => res.json(res.results))
  .post(db.postMovieToFavorites, (req, res) => res.json({message: 'success'}))
;

movies.route('/:id')
  // .get(getonemovie) res.json(res.whatever)
  // .put(editonemovie) json message
  .delete(db.deleteMovie, (req, res) => res.json({message: 'success'}))
;

module.exports = movies;


//1. create a new script.js page that will be linked to show.html
//2. write a get function that gets the info for one and appends it to show page; write a put function that goes to edit/:id
//3. then have user edit on show page using an input/form
//4. button attached / grab from input
//5.
