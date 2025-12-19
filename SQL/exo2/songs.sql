-- 1 -  Crée une table songs qui accueille les données sur des titres des musiques

CREATE DATABASE IF NOT EXISTS songs_db;
USE songs_db;

CREATE TABLE songs (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  artist VARCHAR(255),
  album VARCHAR(255),
  release_year INT
);

-- 2- Crée 3 requêtes qui permettent d'insérer des données au sein de la table songs.

INSERT INTO songs (title, artist, album, release_year)
VALUES ('Bohemian Rhapsody', 'Queen', 'A Night at the Opera', 1975);

INSERT INTO songs (title, artist, album, release_year)
VALUES ('Imagine', 'John Lennon', 'Imagine', 1971);

INSERT INTO songs (title, artist, album, release_year)
VALUES ('Billie Jean', 'Michael Jackson', 'Thriller', 1982); 
