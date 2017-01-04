const { MongoClient } = require('mongodb');
const dbConnection = 'mongodb://localhost:27017/rats_to_restaurants';

module.exports = function theRestaurants () {

  return{
    searchRestaurants(req, res, next){

    const filterObj ={};
    const qs = req.query;
    console.log(qs);

    if (qs.dba !== '') filterObj.dba = new RegExp(`\\b${qs.dba}`, 'i');
    if (qs.cuisine_description !== '') filterObj.cuisine_description = new RegExp(`\\b${qs.cuisine_description}`, 'i');
    if (qs.score !== '') filterObj.score = qs.score;
    // console.log(qs.score);
    if (qs.grade !== '') filterObj.grade = qs.grade;

    // console.log('filtered ****', filterObj);

      MongoClient.connect(dbConnection, (err, db) => {
        if (err) return next(err);

        db.collection('restaurants')
        .find(filterObj)
        .toArray((arrayError, data)=> {
          if (arrayError) return next(arrayError);
          console.log('filterObj: ',filterObj);
          res.filteredResultsRestaurants = data;
          console.log(res.filteredResultsRestaurants)
          return next();
        });

      return false;
    });
      // return false;
  }
}
}
