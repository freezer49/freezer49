// EXERCICE 1 — Variables & Types

// objet const avec les données du pokémon
const pokemon = {
  id: 25,
  name: "pikachu",
  height: 4,
  weight: 60,
  types: ["electric"],
};

// accès à une propriété de l'objet
console.log(pokemon.name);

// toString() convertit le number en string
const formattedId = pokemon.id.toString();

// template literal + padStart() pour formater l'id
console.log(`#${formattedId.padStart(3, "0")}`);
