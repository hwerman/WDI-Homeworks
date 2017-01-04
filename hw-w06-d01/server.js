const express = require('express');
const logger = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000

app.use(logger('dev'));
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.listen(PORT, () => console.log('Server is listening on port', PORT));

const homeRoute = require('./routes/home')
const angRoute = require('./routes/ang')

app.use('/', homeRoute);
app.use('/angry-birds', angRoute);
// app.use('/angry-birds/:id', angIDRoute);
