// récupèrer les élements du HTML
const throwButton = document.querySelector("#btn");
const picture = document.querySelector("#pokemon-image");
const pokemonName = document.querySelector("#pokemon-name");
const type = document.querySelector("#pokemon-type");
const message = document.querySelector("#pokemon-message");
const slotframe = document.querySelector("#slot-frame");
console.log(throwButton, picture, pokemonName, type, message, slotframe);

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
    startSlot(data);
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

function startSlot(finalData) {
  slotframe.innerHTML = "";
  // 1. crée une img et injecte-la dans slot-frame
  const slotImg = document.createElement("img");
  slotframe.appendChild(slotImg);

  // 2. setInterval change le src toutes les 100ms
  const interval = setInterval(() => {
    const randomId = Math.floor(Math.random() * 898) + 1;
    slotImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomId}.png`;
  }, 100);

  // 3. setTimeout arrête le défilement après 2 secondes
  setTimeout(() => {
    clearInterval(interval);
    slotImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${finalData.id}.png`;
    pokemonName.textContent = finalData.name;

    // 4. affiche le vrai pokémon
    pokemonName.textContent = finalData.name;
    type.textContent = finalData.types[0].type.name;
    message.textContent = messages[finalData.id.toString()];
    picture.src = finalData.sprites.other["official-artwork"].front_default;
    throwButton.disabled = false;
  }, 2000);
}
