const router = require('express').Router();
const dbModel = require('../models/mymodel');

router.get('/', dbModel.searchBirds, (req, res) => {
  res.render('angbirds', {
    results: res.filteredBirds
  });
});

router.get('/:id', dbModel.searchOneBird, (req, res) => {
  res.render('angbirds', {
    results: res.oneBird
  });
});

module.exports = router
