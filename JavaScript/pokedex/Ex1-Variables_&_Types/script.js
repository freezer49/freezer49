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

// template literal + padStart() formate l'id en 3 chiffres
console.log(`#${formattedId.padStart(3, "0")}`);

// division pour convertir les unités (dm→m, hg→kg)
const heightInMeters = pokemon.height / 10;
const weightInKg = pokemon.weight / 10;

// template literal affiche taille et poids formatés
console.log(`Taille : ${heightInMeters}m | Poids : ${weightInKg}kg`);

// charAt() + toUpperCase() + slice() pour capitaliser le nom
const formattedName =
  pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
console.log(formattedName);

// template literal assemble toutes les variables en une fiche
const fiche = `⚡ #${formattedId.padStart(3, "0")} — ${formattedName} | Taille : ${heightInMeters}m | Poids : ${weightInKg}kg`;

// querySelector + textContent injecte la fiche dans le HTML
document.querySelector("#fiche").textContent = fiche;

// Ce que tu as pratiqué :
// const · object · template literal · toString() · padStart() · charAt() · toUpperCase() · slice() · querySelector · textContent
