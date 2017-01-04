const express = require('express');
const logger = require('morgan');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(logger('dev'));

app.listen(port, () => console.log('Server is listening', port));

app.get('/', (req, res) => {
  res.render('index', {
    answer: 'N.S.Aaaayyyyyyy. watchinU. Instructions: enter an applicable city, shape, or state into the url and wait for the magic.'
});
});

const sightings = require('./sightings.json');

app.get('/sightings', (req, res) => {
  let getType = sightings.filter(function(sighting){
    if (req.query.city === sighting.city){
      return(sighting)
    } else if (req.query.state === sighting.state){
      return sighting;
    } else if (req.query.shape === sighting.shape){
      return sighting;
    }
  })
  res.render('sightings', {
    truth: getType
  })
})
