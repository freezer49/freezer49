// VARIABLES //
const recipeDiv = document.getElementById("search-result");
let currentPage = 1;
const recipesPerPage = 3;

// RÉCUPÉRER //
async function fetchRecipes(skip) {
  const url = `https://dummyjson.com/recipes?limit=${recipesPerPage}&skip=${skip}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.recipes;
}

// AFFICHER LES RECETTES //
async function displayRecipes(page = 1) {
  // Calculer combien de recettes il faut sauter
  const skip = (page - 1) * recipesPerPage;

  // Afficher "Chargement..."
  recipeDiv.innerHTML = "<p>Chargement...</p>";

  // Récupérer les recettes
  const recipes = await fetchRecipes(skip);

  // Créer le HTML des recettes
  let html = recipes
    .map(
      (recipe) => `
    <div style="border: 1px solid #ccc; padding: 10px; margin: 10px 0;">
      <h2>${recipe.name}</h2>
      <p>⏱️ Temps: ${recipe.cookTimeMinutes} min</p>
      <p>📊 Difficulté: ${recipe.difficulty}</p>
      <p>🥘 Ingrédients: ${recipe.ingredients.join(", ")}</p>
    </div>
  `
    )
    .join("");

  // Ajouter les boutons de pagination
  html += '<div style="margin-top: 20px; text-align: center;">';

  if (page > 1) {
    html += `<button onclick="displayRecipes(${
      page - 1
    })">← Précédent</button>`;
  }

  html += ` Page ${page} `;

  if (recipes.length === recipesPerPage) {
    html += `<button onclick="displayRecipes(${page + 1})">Suivant →</button>`;
  }

  html += "</div>";

  // Afficher tout à l'écran
  recipeDiv.innerHTML = html;
  currentPage = page;
}

// LANCER AU DÉMARRAGE //
displayRecipes();
