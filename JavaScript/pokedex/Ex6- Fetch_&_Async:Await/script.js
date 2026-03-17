// EXERCICE 6 — Fetch & Async/Await

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

async function getPokemon(nameOrId) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
  const data = await response.json();
  return data;
}

async function test() {
  const pokemon = await getPokemon("pikachu");
  console.log(pokemon);
}
test();
