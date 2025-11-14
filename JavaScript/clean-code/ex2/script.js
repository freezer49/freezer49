// Ré-écris ce code en utilisant la syntaxe récente de Javascript des template literals et en utilisant des fonctions.

function determinerStatut(estAbonne) {
  return estAbonne ? "Abonné" : "Non abonné";
}

function determinercategorie(age) {
  if (age < 18) return "Jeune";
  if (age < 60) return "Adulte";
  return "Senior";
}

function genererRapportUtilisateur(nom, age, ville, profession, estAbonne) {
  return `Rapport utilisateur :
Nom : ${nom}
Age : ${age} ans
Ville : ${ville}
Profession : ${profession}
Statut : ${determinerStatut(estAbonne)}
Catégorie : ${determinercategorie(age)}`;
}
