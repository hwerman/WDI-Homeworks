DROP TABLE IF EXISTS movies;

CREATE TABLE movies(
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  year VARCHAR NOT NULL,
  poster TEXT NOT NULL DEFAULT '../noimage.jpg',
  imdbrating VARCHAR,
  runtime TEXT
);
