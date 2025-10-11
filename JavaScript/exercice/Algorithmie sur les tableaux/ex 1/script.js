
// Base de données initiale
const books = [
    { id: 1, title: "JavaScript for Beginners", author: "Alice Martin", year: 2020, pages: 300, genre: "programming", rating: 4.2 },
    { id: 2, title: "Advanced React", author: "Bob Dupont", year: 2021, pages: 450, genre: "programming", rating: 4.5 },
    { id: 3, title: "Art History", author: "Claire Leroy", year: 2019, pages: 280, genre: "art", rating: 3.8 },
    { id: 4, title: "Python Data Science", author: "David Moreau", year: 2022, pages: 520, genre: "programming", rating: 4.7 },
    { id: 5, title: "Design Patterns", author: "Alice Martin", year: 2018, pages: 320, genre: "programming", rating: 4.1 },
    { id: 6, title: "Modern Painting", author: "Emma Laurent", year: 2020, pages: 190, genre: "art", rating: 3.9 }
];

// 1. Trouver tous les livres d'un auteur donné
function findBooksByAuthor(authorName) {
    return books.filter(book => book.author === authorName);
}

// 2. Calculer la moyenne des pages par genre
function averagePagesByGenre() {
    const genreStats = {};
    
    books.forEach(book => {
        if (!genreStats[book.genre]) {
            genreStats[book.genre] = { totalPages: 0, count: 0 };
        }
        genreStats[book.genre].totalPages += book.pages;
        genreStats[book.genre].count += 1;
    });
    
    const averages = {};
    for (const genre in genreStats) {
        averages[genre] = genreStats[genre].totalPages / genreStats[genre].count;
    }
    
    return averages;
}

// 3. Trouver le livre le plus récent
function findMostRecentBook() {
    return books.reduce((mostRecent, book) => 
        book.year > mostRecent.year ? book : mostRecent
    );
}
// Tests et affichage des résultats
console.log("=== 1. Livres d'Alice Martin ===");
console.log(findBooksByAuthor("Alice Martin"));

console.log("\n=== 2. Moyenne des pages par genre ===");
console.log(averagePagesByGenre());

console.log("\n=== 3. Livre le plus récent ===");
console.log(findMostRecentBook());

