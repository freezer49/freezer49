// Annexe ///
const candidates = [
  "Le Filip",
  "Ruby On The Nail",
  "Leona Winter",
  "Lula Strega",
  "Misty Phoenix",
  "Perseo",
  "Norma Bell",
  "Edeha Noire",
  "Magnetica",
  "Afrodite Amour",
];

// Accède au tableau pour afficher dans la console “Le Filip”
console.log(candidates[0]);
// Accède au tableau pour afficher dans la console “Edeha Noire”
console.log(candidates[7]);
// Parcours le tableau pour afficher dans la console ligne par ligne chaque nom des candidates
for (let i = 0; i < candidates.length; i++) {
  console.log(candidates[i]);
}
// (Bonus) Parcours le tableau candidates pour afficher la liste des candidates dans une page HTML :
const ul = document.createElement("ul");
for (let i = 0; i < candidates.length; i++) {
  const li = document.createElement("li");
  li.textContent = candidates[i];
  ul.appendChild(li);
}
document.body.appendChild(ul);
