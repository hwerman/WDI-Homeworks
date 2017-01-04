PART 3

SELECT * FROM players WHERE team = 'NYK';

SELECT * FROM players WHERE team = 'IND' AND age < 26;

SELECT * FROM players ORDER BY points ASC;

SELECT name, (points / games)
FROM players
  ORDER BY points DESC
  LIMIT 20;

SELECT AVG(age) FROM players;

SELECT AVG(age) FROM players WHERE team = 'OKC';

SELECT AVG(age) FROM players WHERE games > 40;

PART 4

-- notes
-- sum(points) indicates the total points of all players
-- group by team organizes players by team
-- only select team because you are grouping them by teams
-- FIND TEAM & TEAMPOINTS
-- ORDER BY TEAMPOINTS ASC;

SELECT team, SUM(points) FROM players
GROUP BY team
ORDER BY SUM(points) DESC;

-- notes
-- you need to include a GROUP BY if you have avg() or sum() or anything as a second piece in the 'select'

SELECT age, AVG( points / games) FROM players
GROUP BY age
ORDER BY age DESC;

-- notes
-- COUNT will give you the number of rows w that criteria
SELECT team, COUNT(id) FROM players WHERE (points/games) > 12
GROUP BY team
ORDER BY COUNT(id) DESC;
