const pg = require('pg-promise')({});

const config = {
  host:       process.env.DB_HOST,
  port:       process.env.DB_PORT,
  database:   process.env.DB_NAME,
  user:       process.env.DB_USER,
  password:   process.env.DB_PASS,
};

const db = pg(config);

module.exports = {
  getApts(req, res, next){
    db.any('SELECT * FROM apartments;')
    .then((data)=> {
      res.apartments = data;
      next();
    })
    .catch(error => next(error));
  },

  getBuildings(req, res, next){
    db.any('SELECT * FROM buildings;')
    .then((data)=> {
      res.buildings = data;
      next();
    })
    .catch(error => next(error));
  },

  getSingleApt(req, res, next){
    db.one(`SELECT * FROM apartments
      WHERE id=${req.params.id};`)
    .then((data)=> {
      res.singleapt = data;
      next();
    })
    .catch(error => next(error));
  },

  getSingleBuilding(req, res, next){
    db.one(`SELECT * FROM buildings
      WHERE id=${req.params.id};`)
    .then((data) => {
      res.singlebuilding = data;
      next();
    })
    .catch(error => next(error));
  },

  atSingleApt(req, res, next) {
    db.none(`INSERT INTO apartments (id, floor, name, price, sqft, bedrooms, bathrooms, building_id) VALUES ($1, $2, $3, $4, $5, $6, $7);`,
      [req.body.floor, req.body.name, req.body.price, req.body.sqft, bedrooms ]
      )
      .then((apartment) => {
      res.data = apartment;
      next();
    })
    .catch(error => next(error));
},

  // updateSingleApt(req, res, next) {

  // }

  // deleteSingleApt(req, res, next) {

  // }
}
