// 1. Récupérer les données de l'API
async function chargerOeuvres() {
  const response = await fetch(
    "https://api.artic.edu/api/v1/artworks?limit=15"
  );
  const data = await response.json();

  // 2. Récupérer le conteneur
  const gallery = document.getElementById("gallery");

  // 3. Afficher chaque œuvre
  data.data.forEach((oeuvre) => {
    const div = document.createElement("div");
    div.className = "oeuvre";

    // Construire l'URL de l'image
    const imageUrl = `https://www.artic.edu/iiif/2/${oeuvre.image_id}/full/400,/0/default.jpg`;

    div.innerHTML = `
      <img src="${imageUrl}" alt="${oeuvre.title}">
      <h3>${oeuvre.title}</h3>
      <p>${oeuvre.artist_display || "Artiste inconnu"}</p>
      <p>${oeuvre.date_display || "Date inconnue"}</p>
    `;

    gallery.appendChild(div);
  });
}

// 4. Appeler la fonction au démarrage
window.addEventListener("DOMContentLoaded", chargerOeuvres);
