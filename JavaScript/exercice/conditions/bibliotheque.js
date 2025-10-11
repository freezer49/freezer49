// Base de données initiale
const books = [
    { id: 1, title: "JavaScript for Beginners", author: "Alice Martin", year: 2020, pages: 300, genre: "programming", rating: 4.2 },
    { id: 2, title: "Advanced React", author: "Bob Dupont", year: 2021, pages: 450, genre: "programming", rating: 4.5 },
    { id: 3, title: "Art History", author: "Claire Leroy", year: 2019, pages: 280, genre: "art", rating: 3.8 },
    { id: 4, title: "Python Data Science", author: "David Moreau", year: 2022, pages: 520, genre: "programming", rating: 4.7 },
    { id: 5, title: "Design Patterns", author: "Alice Martin", year: 2018, pages: 320, genre: "programming", rating: 4.1 },
    { id: 6, title: "Modern Painting", author: "Emma Laurent", year: 2020, pages: 190, genre: "art", rating: 3.9 }
];

/**
 * Fonction 1 : Trouver tous les livres d'un auteur donné
 * @param {string} authorName - Le nom de l'auteur à rechercher
 * @returns {Array} - Tableau contenant tous les livres de cet auteur
 */
function findBooksByAuthor(authorName) {
    // La méthode filter() crée un nouveau tableau avec tous les éléments
    // qui passent le test de la fonction fournie
    // Pour chaque livre (book), on vérifie si son auteur correspond au nom recherché
    return books.filter(book => book.author === authorName);
}

/**
 * Fonction 2 : Calculer la moyenne des pages par genre
 * @returns {Object} - Objet avec les genres comme clés et les moyennes comme valeurs
 */
function calculateAveragePagesByGenre() {
    // Objet pour stocker les résultats : {genre: moyenne}
    const genreStats = {};

    // Objet temporaire pour accumuler les données : {genre: {total: X, count: Y}}
    const genreData = {};

    // Parcourir tous les livres du tableau
    books.forEach(book => {
        // Extraire le genre du livre actuel
        const genre = book.genre;

        // Si ce genre n'existe pas encore dans genreData, l'initialiser
        if (!genreData[genre]) {
            // Créer un objet avec total de pages à 0 et compteur de livres à 0
            genreData[genre] = { total: 0, count: 0 };
        }

        // Ajouter le nombre de pages de ce livre au total du genre
        genreData[genre].total += book.pages;
        // Incrémenter le compteur de livres pour ce genre
        genreData[genre].count += 1;
    });

    // Calculer la moyenne pour chaque genre
    // Object.keys() retourne un tableau des clés (noms de genres)
    for (let genre in genreData) {
        // Diviser le total des pages par le nombre de livres pour obtenir la moyenne
        // .toFixed(2) arrondit à 2 décimales et retourne une chaîne
        // parseFloat() convertit la chaîne en nombre décimal
        genreStats[genre] = parseFloat((genreData[genre].total / genreData[genre].count).toFixed(2));
    }

    // Retourner l'objet contenant les moyennes par genre
    return genreStats;
}

/**
 * Fonction pour afficher les livres d'Alice Martin dans le HTML
 */
function displayAliceBooks() {
    // Appeler la fonction pour trouver les livres d'Alice Martin
    const aliceBooks = findBooksByAuthor("Alice Martin");

    // Sélectionner l'élément HTML où afficher les résultats
    const container = document.getElementById("alice-books");

    // Vérifier s'il y a des livres trouvés
    if (aliceBooks.length === 0) {
        // Si aucun livre trouvé, afficher un message
        container.innerHTML = "<p>Aucun livre trouvé pour cet auteur.</p>";
        return; // Sortir de la fonction
    }

    // Créer le HTML pour chaque livre
    // map() transforme chaque livre en une chaîne HTML
    // join('') combine toutes les chaînes en une seule
    container.innerHTML = aliceBooks.map(book => `
        <div class="book-item">
            <div class="book-title">${book.title}</div>
            <div class="book-info">
                📅 Année: ${book.year} |
                📄 Pages: ${book.pages} |
                🏷️ Genre: ${book.genre} |
                ⭐ Note: ${book.rating}/5
            </div>
        </div>
    `).join('');
}

/**
 * Fonction pour afficher les statistiques de pages par genre dans le HTML
 */
function displayGenreStats() {
    // Appeler la fonction pour calculer les moyennes
    const stats = calculateAveragePagesByGenre();

    // Sélectionner l'élément HTML où afficher les résultats
    const container = document.getElementById("genre-stats");

    // Créer le HTML pour chaque genre
    // Object.entries() convertit l'objet en tableau de paires [clé, valeur]
    // map() transforme chaque paire en une chaîne HTML
    // join('') combine toutes les chaînes en une seule
    container.innerHTML = Object.entries(stats).map(([genre, average]) => `
        <div class="genre-stats">
            <div class="genre-name">📚 ${genre.toUpperCase()}</div>
            <div class="book-info">Moyenne de pages: ${average} pages</div>
        </div>
    `).join('');
}

// Afficher les résultats dans la console (pour vérification)
console.log("=== Livres d'Alice Martin ===");
console.log(findBooksByAuthor("Alice Martin"));

console.log("\n=== Moyenne des pages par genre ===");
console.log(calculateAveragePagesByGenre());

// Appeler les fonctions d'affichage quand la page est chargée
displayAliceBooks();
displayGenreStats();
