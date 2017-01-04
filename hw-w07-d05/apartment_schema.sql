-- Apartment schema goes here

DROP TABLE IF EXISTS buildings;
DROP TABLE IF EXISTS apartments;
DROP TABLE IF EXISTS tenants;
DROP TABLE IF EXISTS doormen;

CREATE TABLE buildings(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  address TEXT NOT NULL,
  num_floors INTEGER NOT NULL
);

CREATE TABLE apartments(
  id SERIAL PRIMARY KEY,
  floor INTEGER NOT NULL,
  name VARCHAR(100) NOT NULL,
  price NUMERIC(10,2) NOT NULL,
  sqft INTEGER NOT NULL,
  bedrooms INTEGER NOT NULL,
  bathrooms INTEGER NOT NULL,
  building_id INTEGER NOT NULL
);

CREATE TABLE tenants(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  age INTEGER NOT NULL,
  gender TEXT NOT NULL,
  apartment_id INTEGER NOT NULL
);

CREATE TABLE doormen(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  experience INTEGER NOT NULL,
  shift TEXT NOT NULL,
  building_id INTEGER NOT NULL
);

