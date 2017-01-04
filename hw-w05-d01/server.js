 const express = require('express');
const logger = require('morgan');
const app = express();
const port = process.env.PORT || 3000

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(logger('dev'));

app.listen(port, () => console.log('Server is listening ong port ', port));

app.get('/', (req,res) => {
  res.render('index', {
    answer: 'Homepage: Please enter your desired function in the url bar'});
});

app.get('/add/:num1/:num2', (req,res) => {
  let n1 = parseInt(req.params.num1);
  let n2 = parseInt(req.params.num2);
  let result = n1 + n2;
  res.render('add', {
    answer: result});
});

app.get('/subtract/:num1/:num2', (req,res) => {
  let n1 = parseInt(req.params.num1);
  let n2 = parseInt(req.params.num2);
  let result = n1 - n2;
  res.render('subtract', {
    answer: result});
});

app.get('/multiply/:num1/:num2', (req,res) => {
  let n1 = parseInt(req.params.num1);
  let n2 = parseInt(req.params.num2);
  let result = n1 * n2;
  res.render('multiply', {
    answer: result});
});

app.get('/circle/:num1', (req,res) => {
  let n1 = parseInt(req.params.num1);
  let result = Math.PI * Math.pow(n1, 2);
  res.render('circle', {
    answer: result});
});
