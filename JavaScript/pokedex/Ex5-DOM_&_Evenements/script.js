// EXERCICE 5 — DOM & Événements

// tableau d'objets pokémon avec const
const pokemons = [
  { id: 1, name: "bulbasaur", type: "grass", hp: 45, weight: 69 },
  { id: 4, name: "charmander", type: "fire", hp: 39, weight: 85 },
  { id: 7, name: "squirtle", type: "water", hp: 44, weight: 90 },
  { id: 25, name: "pikachu", type: "electric", hp: 35, weight: 60 },
  { id: 37, name: "vulpix", type: "fire", hp: 38, weight: 99 },
  { id: 52, name: "meowth", type: "normal", hp: 40, weight: 42 },
  { id: 54, name: "psyduck", type: "water", hp: 50, weight: 196 },
  { id: 63, name: "abra", type: "psychic", hp: 25, weight: 195 },
  { id: 74, name: "geodude", type: "rock", hp: 40, weight: 200 },
  { id: 131, name: "lapras", type: "water", hp: 130, weight: 220 },
];

// récupère les deux éléments avec querySelector et affiche-les dans la console 👀

// récupère l'input de recherche et la grille dans le DOM
const searchInput = document.querySelector("#search");
const grid = document.querySelector("#grid");

// vérifie que les deux éléments sont bien récupérés
console.log(grid, searchInput);

// retourne une carte HTML pour un pokémon
function renderCard(pokemon) {
  // template literal avec nom, type et HP
  return `<div>${pokemon.name} - ${pokemon.type} - ${pokemon.hp}</div>`;
}

function renderGrid(tableau) {
  grid.innerHTML = tableau.map(renderCard).join("");
}

renderGrid(pokemons);

/////////

// Filtre en temps réel :

// écoute l'événement input sur searchInput
// à chaque frappe, filtre pokemons par nom avec .filter()
// réaffiche la grille avec renderGrid()

// Indice :

// searchInput.value donne le texte tapé dans l'input
// .includes() vérifie si une string contient une autre string

searchInput.addEventListener("input", () => {
  const filtered = pokemons.filter((pokemon) =>
    pokemon.name.includes(searchInput.value),
  );
  renderGrid(filtered);
});
