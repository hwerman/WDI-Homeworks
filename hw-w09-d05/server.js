'use strict'

require('dotenv').config({ silent: true });
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));
// app.use(express.static(path.join(__dirname, 'src')));

const omdbRouter = require('./routes/movies');
app.use('/movies', omdbRouter);

app.listen(PORT, () => {console.log('Listening')});
