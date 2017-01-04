const home = require('express').Router();
const path = require('path');

home.get('/', (req,res) => res.sendFile(path.join(__dirname, '../views', 'index.html')));

home.get('/show/:id', (req,res) => res.sendFile(path.join(__dirname, '../views', 'show.html')));

module.exports = home;
