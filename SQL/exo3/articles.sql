-- Création de la base de données
CREATE DATABASE IF NOT EXISTS articles_db;
USE articles_db;

-- Création de la table articles
CREATE TABLE IF NOT EXISTS articles (
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
	description TEXT NULL,
	price REAL
);

-- Insérer nos premières données
INSERT INTO articles (description, price) VALUES ('Malabar', 2.0);
INSERT INTO articles (description, price) VALUES ('Fraise Tagada', 2.5);
INSERT INTO articles (description, price) VALUES ('Carambar', 1.5);
INSERT INTO articles (description, price) VALUES ('Michoko', 3.5);
INSERT INTO articles (description, price) VALUES ('Calissons d''Aix', 8.0);

-- Mettre à jour le prix du Carambar
UPDATE articles SET price = 1.1 WHERE id = 3;

-- Supprimer la ligne des Fraises Tagada
DELETE FROM articles WHERE description = 'Fraise Tagada';

