CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL
);

CREATE TABLE edusign (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    signed_at DATETIME NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (firstname, lastname, email) VALUES ('Ada', 'Lovelace', 'ada@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Beatrice', 'Worsley', 'bea@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Bella', 'Guerin', 'bella@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Barbara', 'Chase', 'barbara@test.fr');

-- NIVEAU FACILE

-- 1. Sélectionner toutes les lignes de la table users
SELECT * FROM users;

-- 2. Sélectionner uniquement la ligne où le prénom est Ada dans la table users
SELECT * FROM users WHERE firstname = 'Ada';

-- 3. Sélectionner les lignes dont la première lettre du prénom est un B dans la table users
SELECT * FROM users WHERE firstname LIKE 'B%';

-- 4. Compter le nombre de ligne qu'il y a dans la table users
SELECT COUNT(*) FROM users;

-- 5. Compter le nombre de ligne dont la première lettre du prénom est un B dans la table users
SELECT COUNT(*) FROM users WHERE firstname LIKE 'B%';

-- 6. Afficher uniquement la colonne contenant le prénom de la table users
SELECT firstname FROM users;


-- NIVEAU MOYEN

-- 1. Insérer une ligne dans la table edusign qui correspond à la user Ada avec comme date de signature le 2024-05-30 09:30:00
INSERT INTO edusign (user_id, signed_at) VALUES (1, '2024-05-30 09:30:00');

-- 2. Insérer une ligne dans la table edusign qui correspond à la user Bella avec comme date de signature le 2024-05-30 09:30:00
INSERT INTO edusign (user_id, signed_at) VALUES (3, '2024-05-30 09:30:00');

-- 3. Insérer toutes les lignes de la table users dans la table edusign avec pour date de signature le 2024-09-01 09:30:00
INSERT INTO edusign (user_id, signed_at)
SELECT id, '2024-09-01 09:30:00' FROM users;

-- 4. Sélectionner toutes les lignes de la table edusign ordonnées par date de signature de la plus récente à la plus ancienne et par user_id ascendant
SELECT * FROM edusign ORDER BY signed_at DESC, user_id ASC;

-- 5. Sélectionner toutes les lignes de la table edusign dont la date est 2024-05-30 09:30:00
SELECT * FROM edusign WHERE signed_at = '2024-05-30 09:30:00';
