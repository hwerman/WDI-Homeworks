require('dotenv').config({ silent: true });
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const PORT = process.env.PORT || 3000;

const moviesRouter = require('./routes/movies');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/movies', moviesRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views', 'index.html'));
});

app.get('/show/movies', (req, res) => {
  res.sendFile(path.join(__dirname, '/views', 'show.html'));
});

app.listen(PORT, () => {
  console.log('Listening');
});
