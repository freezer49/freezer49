// Étape 1 : Créer un tableau d'objets d'élèves
const students = [
  {
    name: "Harry",
    favoriteSpell: "expeliarnus",
    magicLevel: 5,
  },
  {
    name: "Hermione",
    favoriteSpell: "leviosa",
    magicLevel: 5,
  },
  {
    name: "Ron",
    favoriteSpell: "reducto",
    magicLevel: 2,
  },
  {
    name: "Luna",
    favoriteSpell: "incendio",
    magicLevel: 3,
  },
];

// Étape 2 : Tirer au hasard un élève pour jeter un sort (faire un index aléatoire pour tirer au hasard l'élève)

const randomIndex = Math.floor(Math.random() * students.length);
const studentPicked = students[randomIndex];

console.log(`${studentPicked.name} casts ${studentPicked.favoriteSpell}`);

// Étape 3 : Faire un duel, en partant du principe que le 1er à faire un duel est celui tiré au hasard plus haut

let randomIndex2 = 0;

do {
  randomIndex2 = Math.floor(Math.random() * students.length);
} while (randomIndex2 === randomIndex);

const studentPicked2 = students[randomIndex2];

console.log(`${studentPicked2.name} casts ${studentPicked2.favoriteSpell}`);

if (studentPicked2.magicLevel < studentPicked.magicLevel) {
  console.log(
    `${studentPicked.name} beat the shit out of ${studentPicked2.name}`
  );
} else {
  console.log(
    `${studentPicked2.name} beat the shit out of ${studentPicked.name}`
  );
}
