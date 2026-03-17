// EXERCICE 6 — Fetch & Async/Await

// données statiques de pokémon
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

// récupère le div qui affiche la carte pokémon
const card = document.querySelector("#card");

// appelle l'API et affiche le résultat dans card
async function getPokemon(nameOrId) {
  card.textContent = "⏳ Chargement...";
  try {
    // fetch + vérification + conversion en JSON
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${nameOrId}`,
    );
    if (!response.ok) {
      throw new Error("Pokémon introuvable");
    }
    const data = await response.json();
    card.textContent = data.name;
    return data;
  } catch (error) {
    // affiche le message d'erreur dans la console
    console.log(error.message);
  }
}

// récupère l'input et le bouton
const searchInput = document.querySelector("#search");
const searchButton = document.querySelector("#btn");

// au clic, vérifie l'input puis lance la recherche
searchButton.addEventListener("click", async () => {
  if (searchInput.value.trim() === "") {
    card.textContent = "⚠️ Tape un nom !";
  } else {
    await getPokemon(searchInput.value);
  }
});

// Ce que tu as pratiqué :
// async/await · fetch · try/catch · throw new Error · response.ok · trim() · addEventListener
