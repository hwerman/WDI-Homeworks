'use strict';

const express     = require('express');
const logger      = require('morgan');
const path        = require('path');
const bodyParser  = require('body-parser');
const methodOverride = require('method-override');

const app     = express();
const PORT    = process.argv[2] || process.env.PORT || 3000;

app.listen(PORT, () => console.log('Server is listening on port', PORT));

const isDev = !('NODE_ENV' in process.env) && require('dotenv').config() && true;

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger(isDev ? 'dev' : 'common'));
app.use(bodyParser.json());

app.use((err, req, res, next) => {
  res.status(500).send('Err');
});

const homeRoute = require('./routes/home');
const apiRoute = require('./routes/api');

app.use('/', homeRoute);
app.use('/api', apiRoute);
