const router = require('express').Router();
const theRats = require('../models/rats');
const dbModel = theRats();

//when the rats/ path is followed, render the index ejs in the views rats directory in the browser
router.get('/', (req,res) => {
  res.render('rats/index');
});

//when the rats/show path is followed, get the results from the search available in the rats model file and return the data
router.get('/show', dbModel.searchRats, (req,res) => {
  res.render('rats/show', {
    results: res.filteredResultsRats
  });
});

module.exports = router;
