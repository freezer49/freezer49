// EXERCICE 2 — Conditions & Comparaisons

// objet const avec les données du pokémon
const pokemon = {
  id: 25,
  name: "pikachu",
  types: ["electric"],
};

// déclaration de fonction avec switch/case pour chaque type
function getTypeInfo(type) {
  switch (type) {
    case "electric":
      return { emoji: "⚡", color: "#FFD93D" };
    case "fire":
      return { emoji: "🔥", color: "#ff6b35" };
    case "water":
      return { emoji: "💧", color: "#4dabf7" };
    // default gère tous les types inconnus
    default:
      return { emoji: "❓", color: "#aaaaaa" };
  }
}

// test de la fonction avec différents types
console.log(getTypeInfo(pokemon.types[0]));
console.log(getTypeInfo("ghost"));

// stocke le type et l'objet retourné dans des variables
const type = pokemon.types[0];
const info = getTypeInfo(type);

// template literal affiche emoji + type
console.log(`${info.emoji} ${type}`);

// textContent injecte le texte + style.backgroundColor change la couleur
document.querySelector("#fiche").textContent = `${info.emoji} ${type}`;
document.querySelector("#fiche").style.backgroundColor = info.color;

// Ce que tu as pratiqué :
// function · switch/case/default · return · objet littéral · notation pointée · style.backgroundColor
