// EXERCICE 3 — Arrays & Boucles

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

// .length → nombre d'éléments du tableau
console.log(pokemons.length);

// .filter() → garde seulement les pokémon de type water
const waterPokemons = pokemons.filter((pokemon) => pokemon.type === "water");
console.log(waterPokemons);

// .find() → retourne le premier pokémon qui correspond
const pikachu = pokemons.find((pokemon) => pokemon.name === "pikachu");
console.log(pikachu);

// .sort() + spread operator → copie et trie par poids croissant
const sortedByWeight = [...pokemons].sort((a, b) => a.weight - b.weight);
console.log(sortedByWeight);

// .reduce() → additionne tous les HP
const totalHp = pokemons.reduce((acc, pokemon) => acc + pokemon.hp, 0);

// division pour calculer la moyenne
const averageHp = totalHp / pokemons.length;
console.log(averageHp);

// .map() → transforme chaque pokémon en carte HTML
const cards = pokemons.map((pokemon) => `<div>${pokemon.name}</div>`);

// .join() + innerHTML → injecte toutes les cartes dans la page
document.querySelector("#grid").innerHTML = cards.join("");

// Ce que tu as pratiqué :
// .length · .filter() · .find() · .sort() · spread operator ... · .reduce() · .map() · .join() · innerHTML
