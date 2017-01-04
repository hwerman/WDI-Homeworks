const api = require('express').Router();
const db =require('../models/index');
// const dbBldg =require()

api.route('/')
  .get((req,res) => res.json('api page'));

api.route('/buildings/:id')
  .get(db.getSingleBuilding, (req,res) => res.json(res.singlebuilding))
  // .post(db.atSingleBuilding, (req, res) => res.json(res.singleBldg))
  // .put(db.updateSingleBuilding, (req,res) => res.json(res.singleBldg2))
  // .delete(db.deleteSingleBuilding, (req,res) => res.json(res.singleBldg3));

api.route('/buildings')
  .get(db.getBuildings, (req,res) => res.json(res.buildings));

api.route('/apartments/:id')
  .get(db.getSingleApt, (req,res) => res.json(res.singleapt))
  // .post(db.atSingleApt, (req,res) => res.json(res.apartment));
  // .put(db.updateSingleApt, (req,res) => res.json(res.singleA2))
  // .delete(db.deleteSingleApt, (req,res) => res.json(res.singleA3));

api.route('/apartments')
  .get(db.getApts, (req,res) => res.json(res.apartments));

module.exports = api;
