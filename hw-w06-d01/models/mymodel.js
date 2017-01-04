const { MongoClient } = require('mongodb');
const dbConnection = 'mongodb://localhost:27017/angrybirds';

function searchBirds(req, res, next){

  MongoClient.connect(dbConnection, (err, db) =>{
    if (err) return next(err);

      db.collection('birds')
      .find()
      .toArray((arrayError, data) =>{
        if (arrayError) return next(arrayError);

        res.filteredBirds = data;
        db.close();
        return next();
      });
      return false;
    });
    return false;
    }

function searchOneBird(req, res, next){

    filterObj ={}
    const param = parseInt(req.params.id)//req.params.id - object that has the bird id
    //req.params points to any parameters that you can go through in a json file

    // // filterObj.id = parseInt(qs.id);

    // if (qs.name !== '') filterObj.name = new RegExp(`\\b${qs.name}`, 'i');
    // if (qs.abilities !== '') filterObj.abilities = new RegExp(`\\b${qs.abilities}`, 'i');
    // if (qs.group !== '') filterObj.group = new RegExp(`\\b${qs.group}`, 'i');

  MongoClient.connect(dbConnection, (err, db) =>{
    if (err) return next(err);

      db.collection('birds')
      .find({id:param})
      .toArray((arrayError, data) =>{
        if (arrayError) return next(arrayError);

        res.oneBird = data;
        db.close();
        return next();
      });
      return false;
    });
    return false;
    }

module.exports = {searchBirds, searchOneBird}
