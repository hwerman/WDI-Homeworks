-- Put answers for apartment query section here

-- 1.
SELECT *
FROM tenants;

-- 2.
SELECT name, age, gender
FROM tenants;

-- 3.
SELECT *
FROM tenants
WHERE age > 65;

-- 4.
SELECT *
FROM tenants
INNER JOIN apartments
  ON (apartments.id = tenants.apartment_id)
WHERE apartment_id = 20;

-- 5.
SELECT *
FROM tenants
INNER JOIN apartments
  ON (apartments.id = tenants.apartment_id)
WHERE apartment_id = 20 OR apartment_id = 21;

-- 6.
SELECT doormen.name, buildings.address
FROM doormen
INNER JOIN buildings
  ON (buildings.id = doormen.building_id);

-- 7.
DELETE FROM tenants
WHERE age > 65;

-- 8.
      -- to get all doormen in bldg 3 where shift is 'Day'
      -- SELECT *
      -- FROM doormen
      -- WHERE shift = 'Day' AND building_id = 3;

UPDATE doormen
SET shift = 'Night'
WHERE building_id = 3;

-- 9.
INSERT INTO tenants (id, name, age, gender, apartment_id) VALUES
  (5372, 'Lou Malnati', 48, 'Male', 1738);

    check to make sure the above was successful
    SELECT *
    FROM tenants
    WHERE apartment_id = 1738;

-- 10.
SELECT apartments.id
FROM apartments
INNER JOIN buildings
  ON (apartments.building_id = buildings.id)
WHERE buildings.id = 2;

-- 11.
SELECT *
FROM apartments
WHERE price > 2300 AND building_id = 3;

-- 12.
      -- to get all 90 yr olds
      -- SELECT *
      -- FROM tenants
      -- WHERE age = 90;

UPDATE tenants
SET age = '91'
WHERE age = 90;

-- NOT APPLICABLE since step 7 got rid of all tenants > 65

-- 13.
UPDATE tenants
SET age = age + 1;

-- 14.
SELECT *
FROM tenants
INNER JOIN apartments
  ON (tenants.apartment_id = apartments.id)
WHERE apartments.price > 2300;

-- 15.
SELECT *
FROM doormen
INNER JOIN buildings
  ON (doormen.building_id = buildings.id)
WHERE buildings.num_floors > 5;

-- 16.
SELECT tenants.name, tenants.age, apartments.price
FROM tenants
INNER JOIN apartments
  ON (tenants.apartment_id = apartments.id)
WHERE apartments.sqft > 1000;

-- 17.
SELECT doormen.name, doormen.experience
FROM doormen
INNER JOIN buildings
  ON (doormen.building_id = buildings.id)
WHERE buildings.name = 'Kshlerin-Klein';

-- 18.
SELECT tenants.name, tenants.age
FROM tenants
INNER JOIN apartments
  ON (tenants.apartment_id = apartments.id)
INNER JOIN buildings
  ON (apartments.building_id = buildings.id)
WHERE apartments.price > 1500 AND buildings.num_floors > 6;

-- DONE.
