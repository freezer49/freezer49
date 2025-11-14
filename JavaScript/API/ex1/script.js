// créer une page web qui affiche les infos d’une donnée en particulier (un post ou une offre par exemple), plutôt qu’afficher la liste entière.

// Récupérer les éléments HTML
const dataIdInput = document.getElementById("data-id");
const button = document.getElementById("fetch-button");
const resultDiv = document.getElementById("result");

// Stocker tout ça dans une variable

async function fetchDataById(id) {
  const response = await fetchhttps://dummyjson.com/recipes
  const data = await response.json();
  return data;
}
//  Récupérer les données et les affichés dans la div
async function displayData() {
  try {
    const id = dataIdInput.value;
    const data = await fetchDataById(id);
    resultDiv.innerHTML = `
      <h2>${data.title}</h2>
      <p>${data.body}</p>
      <p><strong>Tags:</strong> ${data.tags.join(", ")}</p>
    `;
  } catch (error) {
    console.error("Erreur lors du chargement des données:", error);
    resultDiv.innerHTML = "<p>Erreur lors du chargement</p>";
  }
}
console.log(displayData);
// Ajouter un écouteur d'événement au bouton
button.addEventListener("click", displayData);
