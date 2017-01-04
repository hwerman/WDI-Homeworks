BEGIN;

INSERT INTO movies(id, title, year, poster, imdbrating, runtime) VALUES

(1, 'Rocky', '1976', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_SX300.jpg', 8.1, '120 min'),
(2, 'Little Miss Sunshine', '2006', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzNTgzODU0NV5BMl5BanBnXkFtZTcwMjEyMjMzMQ@@._V1_SX300.jpg', 7.8, '101 min'),
(3, 'The Departed', '2006', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg', 8.5, '151 min'),
(4, 'The Green Mile', '1999', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SX300.jpg', 8.5, '189 min'),
(5, 'Save the Last Dance', '2001', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1NTUzMzU5NF5BMl5BanBnXkFtZTgwNDAxNzQxMTE@._V1_SX300.jpg', 6.2, '97 min');

COMMIT;
