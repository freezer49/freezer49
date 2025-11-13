//EXERCICE 1

// Fonction pour récupérer les offres d'emploi
async function recupererOffres() {
  const reponse = await fetch("data.json");
  const donnees = await reponse.json();
  return donnees;
}

//Création d'une fonction async
async function afficherOffres() {
  //recupération des données depuis l'API
  const offres = await recupererOffres();

  //Cibler l'élément HTML où afficher les offres
  const conteneur = document.getElementById("offre-conteneur");

  // Boucle pour afficher chaque offre
  offres.forEach((offre) => {
    //Création du HTML pour chaque offre
    const offreHTML = `
<h2>${offre.titre}</h2>
<p>${offre.description}</p>
`;

    // Insertion du HTML dans le conteneur
    conteneur.innerHTML += offreHTML;
  });
}

//EXERCICE 2

//Ajout d'un état de chargement lors de la récupération des données

async function afficherOffres() {
  const conteneur = document.getElementById("offre-conteneur");
  conteneur.innerHTML = "<p>Chargement des offres…</p>";
  const offres = await recupererOffres();
  conteneur.innerHTML = "";
  offres.forEach((offre) => {
    const offreHTML = `
        <h2>${offre.titre}</h2>
        <p>${offre.description}</p>
      `;
    conteneur.innerHTML += offreHTML;
  });
}

// Appele de la fonction pour afficher les offres
afficherOffres();
