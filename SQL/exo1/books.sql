
-- Création de la table books
CREATE TABLE IF NOT EXISTS books (
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
	bookname TEXT NOT NULL,
	author TEXT NOT NULL,
	parution_date INTEGER
);

-- Insertion des données
INSERT INTO books (bookname, author, parution_date)
SELECT 'Le Deuxième Sexe', 'Simone de Beauvoir', 1949
UNION SELECT 'Une chambre à soi', 'Virginia Woolf', 1929
UNION SELECT 'Le rire de la Méduse', 'Hélène Cixous', 1975
UNION SELECT 'La cloche de détresse', 'Sylvia Plath', 1963
UNION SELECT 'Sorcières : La puissance invaincue des femmes', 'Mona Chollet', 2018
UNION SELECT 'Les Argonautes', ' Maggie Nelson', 2015
UNION SELECT 'Nous sommes tous des féministes', 'Chimamanda Ngozi Adichie', 2014
UNION SELECT 'L''Amie prodigieuse', 'Elena Ferrante', 2011
UNION SELECT 'Futur-es', 'Lauren Bastide', 2022
UNION SELECT 'King Kong Théorie', 'Virginie Despentes', 2006
UNION SELECT 'La Femme rompue', 'Simone de Beauvoir', 1967
UNION SELECT 'La Vieillesse', 'Simone de Beauvoir', 1970;

-- Question 1 : Lister toutes les lignes
SELECT * FROM books;

-- Question 2 : Les 5 premières lignes
SELECT * FROM books LIMIT 5;

-- Question 3 : Nom et date, triés par date
SELECT bookname, parution_date FROM books ORDER BY parution_date ASC;

-- Question 4 : Livres de Simone de Beauvoir
SELECT * FROM books WHERE author = 'Simone de Beauvoir';

-- Question 5 : Livres de Simone de Beauvoir après 1950
SELECT bookname FROM books WHERE author = 'Simone de Beauvoir' AND parution_date > 1950;

-- Question 6 : Nombre de livres
SELECT COUNT(*) FROM books;

