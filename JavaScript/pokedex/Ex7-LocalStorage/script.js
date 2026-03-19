// récupèrer les élements du HTML
const searchInput = document.querySelector("#search");
const searchButton = document.querySelector("#btn");
const card = document.querySelector("#card");
const favButton = document.querySelector("#favBtn");
const favoris = document.querySelector("#favoris");

console.log(searchButton, searchInput, card, favButton, favoris);
let currentPokemon = null;
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
    currentPokemon = data;
    return data;
  } catch (error) {
    // affiche le message d'erreur dans la console
    console.log(error.message);
  }
}

// au clic, vérifie l'input puis lance la recherche
searchButton.addEventListener("click", async () => {
  if (searchInput.value.trim() === "") {
    card.textContent = "⚠️ Tape un nom !";
  } else {
    await getPokemon(searchInput.value);
  }
});

// déclarer une variable pour les favoris
let favorisListe = [];
favButton.addEventListener("click", () => {
  if (currentPokemon === null) {
    card.textContent = "⚠️ Cherche un pokémon d'abord !";
    return;
  }
  favorisListe.push(currentPokemon);
  localStorage.setItem("favoris", JSON.stringify(favorisListe));
  renderFavoris();
});

function renderFavoris() {
  favoris.innerHTML = favorisListe
    .map((pokemon) => `<div>${pokemon.name}</div>`)
    .join("");
}

favorisListe = JSON.parse(localStorage.getItem("favoris")) || [];
renderFavoris();
