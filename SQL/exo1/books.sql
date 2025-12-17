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

