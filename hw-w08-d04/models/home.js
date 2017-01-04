const db = require('../lib/dbConnect.js');

function getAllMovies(req, res, next){
  db.any('SELECT * FROM movies;')
  .then((data) => {
    res.results = data;
    next();
  })
  .catch(error => next(error));
}

function postMovieToFavorites(req, res, next){
  db.none(`INSERT INTO movies
    (title, poster, imdbrating, runtime)
    VALUES ($1, $2, $3, $4);`,
    [req.body.Title, req.body.Poster, req.body.Rating, req.body.Runtime]
    )
    .then(next())
    .catch(error => next(error));
}

// function putUpdatesToMovie(req, res, next){//NOT WORKING
//   db.none(`UPDATE movies
//       SET imdbrating = []
//       WHERE id =$1`,
//       [req.params.id]
//       )
//       .then(next())
//       .catch(err => next(err));
// }

function deleteMovie(req, res, next){
  db.none(`DELETE FROM movies
    WHERE id = $1;`,
    [req.params.id]
    )
    .then(next())
    .catch(err => next(err));
}

module.exports = {
  getAllMovies,
  postMovieToFavorites,
  // putUpdatesToMovie,
  deleteMovie
};
