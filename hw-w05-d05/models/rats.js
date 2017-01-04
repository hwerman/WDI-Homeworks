const { MongoClient } = require('mongodb');
const dbConnection = 'mongodb://localhost:27017/rats_to_restaurants';

module.exports = function theRats () {

  return{
    searchRats(req, res, next){

    const filterObj ={};
    const qs = req.query; //the element we're trying to locate that corresponds with the json file

    if (qs.descriptor !== '') filterObj.descriptor = new RegExp(`\\b${qs.descriptor}`, 'i');
    if (qs.status !== '') filterObj.status = new RegExp(`\\b${qs.status}`, 'i');
    if (qs.street_name !== '') filterObj.street_name = new RegExp(`\\b${qs.street_name}`, 'i');
    if (qs.borough !== '') filterObj.borough = new RegExp(`\\b${qs.borough}`, 'i');
    //if the queries are words, which they all are here, allow the user to type in the first few letters of the word and find results

      MongoClient.connect(dbConnection, (err, db) => {
        if (err) return next(err);

        db.collection('rats')
        .find(filterObj) //filter the results in the collection rats
        .toArray((arrayError, data)=> {
          if (arrayError) return next(arrayError);

          res.filteredResultsRats = data; //the results will be sent back to the controller
          return next();
        });

      return false;
    });
  }
}
}
