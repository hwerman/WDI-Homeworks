BEGIN;

INSERT INTO movies(id, title, poster, imdbrating, runtime) VALUES

(1, 'Rocky', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_SX300.jpg', 8.1, '120 min'),
(2, 'Little Miss Sunshine', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzNTgzODU0NV5BMl5BanBnXkFtZTcwMjEyMjMzMQ@@._V1_SX300.jpg', 7.8, '101 min'),
(3, 'The Departed', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg', 8.5, '151 min'),
(4, 'The Green Mile', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SX300.jpg', 8.5, '189 min'),
(5, 'Save the Last Dance', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1NTUzMzU5NF5BMl5BanBnXkFtZTgwNDAxNzQxMTE@._V1_SX300.jpg', 6.2, '97 min');

COMMIT;
