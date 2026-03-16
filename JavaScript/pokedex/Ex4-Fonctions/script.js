// EXERCICE 4 — Fonctions

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

// fonction avec deux paramètres → retourne un tableau filtré par type
function filterByType(pokemons, type) {
  return pokemons.filter((pokemon) => pokemon.type === type);
}

// appel de la fonction avec le tableau et le type souhaité
console.log(filterByType(pokemons, "water"));

// retourne le pokémon le plus lourd du tableau
function getHeaviest(pokemons) {
  // copie + tri décroissant par poids + premier élément
  return [...pokemons].sort((a, b) => b.weight - a.weight)[0];
}

// affiche le pokémon le plus lourd
console.log(getHeaviest(pokemons));

// moyenne des HP de tous les pokémon
function calcAverageHp(pokemons) {
  // additionne tous les HP avec reduce()
  const totalHp = pokemons.reduce((acc, pokemon) => acc + pokemon.hp, 0);
  // divise par le nombre de pokémon
  return totalHp / pokemons.length;
}

console.log(calcAverageHp(pokemons));

// retourne une carte HTML pour un pokémon
function renderCard(pokemon) {
  // template literal avec nom, type et HP
  return `<div>${pokemon.name} - ${pokemon.type} - ${pokemon.hp}</div>`;
}

// teste la fonction avec le premier pokémon du tableau
console.log(renderCard(pokemons[0]));

// .map(renderCard) appelle renderCard sur chaque pokémon du tableau
const cards = pokemons.map(renderCard);

// join("") colle toutes les cartes + innerHTML injecte dans la page
document.querySelector("#grid").innerHTML = cards.join("");
