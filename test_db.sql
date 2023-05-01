CREATE DATABASE song_management;
USE song_management;

CREATE TABLE songs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  artist VARCHAR(255) NOT NULL,
  album VARCHAR(255) NOT NULL,
  release_date DATE NOT NULL
);