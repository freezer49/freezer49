// récupèrer les élements du HTML
const throwButton = document.querySelector("#btn");
const picture = document.querySelector("#pokemon-image");
const pokemonName = document.querySelector("#pokemon-name");
const type = document.querySelector("#pokemon-type");
const message = document.querySelector("#pokemon-message");

console.log(throwButton, picture, pokemonName, type, message);

// Génèrer un ID aléatoire et fetch le pokémon

async function getRandomPokemon() {
  throwButton.disabled = true;
  const randomId = Math.floor(Math.random() * 898) + 1;
  try {
    pokemonName.textContent = "🎰 Tirage en cours...";
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`,
    );
    if (!response.ok) {
      throw new Error("Pokémon introuvable");
    }
    const data = await response.json();
    console.log(data.name);
    pokemonName.textContent = data.name;
    type.textContent = data.types[0].type.name;
    message.textContent = messages[randomId.toString()];
    picture.src = data.sprites.other["official-artwork"].front_default;
    throwButton.disabled = false;
    return data;
  } catch (error) {
    // affiche le message d'erreur dans la console
    console.log(error.message);
  }
}

// Branche le bouton
throwButton.addEventListener("click", async () => {
  await getRandomPokemon();
});

let messages = {};

async function loadMessages() {
  // fetch + vérification + conversion en JSON
  const response = await fetch(`./messages.json`);
  const data = await response.json();
  messages = data;
  return data;
}
loadMessages();
