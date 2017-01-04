const router = require('express').Router();
const theRestaurants = require('../models/restaurants');
const dbModel = theRestaurants();

//when the restaurants/ path is followed, render the index ejs in the views restaurants directory in the browser
router.get('/', (req,res) => {
  res.render('restaurants/index');
});

//when the restaurants/show path is followed, get the results from the search available in the restaurants model file and return the data
router.get('/show', dbModel.searchRestaurants, (req,res) => {
  // console.log(res.filteredResultsRestaurants);
  res.render('restaurants/show', {
    results: res.filteredResultsRestaurants
  });
});

module.exports = router;
