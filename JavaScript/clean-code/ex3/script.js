// fonction pour créer un élément photo

function createPhotoElement(photo) {
  const photoDiv = document.createElement("div");
  photoDiv.className = "photo";

  const img = document.createElement("img");
  img.src = photo.thumbnailUrl;
  img.alt = photo.title;

  const title = document.createElement("div");
  title.className = "photo-title";
  title.textContent = photo.title;

  photoDiv.appendChild(img);
  photoDiv.appendChild(title);

  return photoDiv;
}

// fonction principale pour charger et afficher la galerie de photos

function gallery() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => {
      if (!response.ok) throw new Error("Erreur API");
      return response.json();
    })
    .then((photos) => {
      const galleryDiv = document.getElementById("gallery");
      photos.slice(0, 50).forEach((photo, index) => {
        // Utiliser une image placeholder qui fonctionne vraiment
        photo.thumbnailUrl = `https://picsum.photos/200?random=${index}`;
        galleryDiv.appendChild(createPhotoElement(photo));
      });
    })
    .catch((error) => {
      console.error(error);
      document.getElementById("gallery").textContent = "Erreur de chargement";
    });
}

// Appel de la fonction pour afficher les photos au chargement de la page

window.onload = gallery;
