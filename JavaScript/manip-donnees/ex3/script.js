const fs = require("fs");
const filepath = "/manip-donnees/ex3/data.json";

const content = fs.readFileSync(filepath, { encoding: "utf8", flag: "r" });
const data = JSON.parse(content);

// write your code bellow
// affiche dans ta console le type de data pour vérifier qu’il corresponde bien au type object et non string
console.log("type of data:", typeof data);

// Affiche dans la console, le premier objet du tableau d’objets
console.log("Premier element du tableau : ", data[0]);

// Affiche dans la console, le nombre d’objects contenu dans le tableau
console.log("Nombre d'objets dans le tableau = ", data.length);

// Affiche dans la console, les informations de la candidate arrivée au 4e rang
console.log("Quatrième Objet du Tableau : ", data[4]);

// Affiche dans la console, l’âge moyen des candidates
let sommeAge = 0;
for (let i = 0; i < data.length; i++) {
  sommeAge += data[i].age;
}
const avg = sommeAge / data.length;
console.log("Moyenne d'age des candidates : ", avg);
