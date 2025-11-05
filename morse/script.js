// Étape 1
// Dans un fichier JavaScript, commencez par écrire une fonction getLatinCharacterList. Cette fonction va prendre en paramètre du texte et retourner un tableau contenant chaque caractère.

// Tester la fonction en lui donnant une chaine de caractères “Hello, world”, et assurez-vous qu’elle renvoie bien ["H", "e", "l", "l", "o", ",", " ", "w", "o", "r", "l", "d"]

function getLatinCharacterList(text) {
  return text.split("");
}

// Étape 2
// À votre fichier, ajouter le dictionnaire en annexe 1. Il vous permettra d’établir une table de correspondance entre les caractères alphabets latin et l’alphabet morse.

const latinToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

// Créer une fonction translateLatinCharacter qui prend un paramètre un caractère et renvoie sa correspondance en morse.

// Tester la fonction en lui donnant en paramètre “A”, et assurez-vous qu’elle renvoie bien .-.

function translateLatinCharacter(character) {
  if (!character) return undefined;
  return latinToMorse[character.toUpperCase()];
}

// étape 3
// Créer une fonction encode qui prend en paramètre du texte et renvoie la traduction en morse.

function encode(text) {
  const array = [];
  const splittedText = getLatinCharacterList(text);
  for (let i = 0; i < splittedText.length; i++) {
    if (splittedText[i] == " ") {
      array.push("/");
    } else {
      const morse = translateLatinCharacter(splittedText[i]);
      if (morse !== undefined) {
        array.push(morse);
      } else {
      }
    }
  }
  return array.join(" "); // transformer le tableau en chaine de caractères
}

console.log(encode("Ceci est un test"));

// étape 4

const morseToLatin = {
  "-": "T",
  "--": "M",
  "---": "O",
  "--.": "G",
  "--.-": "Q",
  "--..": "Z",
  "-.": "N",
  "-.-": "K",
  "-.--": "Y",
  "-.-.": "C",
  "-..": "D",
  "-..-": "X",
  "-...": "B",
  ".": "E",
  ".-": "A",
  ".--": "W",
  ".---": "J",
  ".--.": "P",
  ".-.": "R",
  ".-..": "L",
  "..": "I",
  "..-": "U",
  "..-.": "F",
  "...": "S",
  "...-": "V",
  "....": "H",
};

// fonction pour séparer chaque caractères morse
function getMorseCharacterList(text) {
  return text.split(" ");
}

// fonction pour traduire chaque morse en lettre
function translateMorseCharacter(character) {
  // Si le code morse n'existe pas dans le dictionnaire, retourne undefined.
  if (!character) return undefined;
  return morseToLatin[character];
}

// décoder de morse à texte
function decode(text) {
  const array = [];

  const splittedText = getMorseCharacterList(text);

  for (let i = 0; i < splittedText.length; i++) {
    // boucler sur le texte
    if (splittedText[i] == "/") {
      // gérer le cas où le morse est un /
      array.push(" ");
    } else {
      // sinon traduire du morse au texte
      const letter = translateMorseCharacter(splittedText[i]);
      if (letter !== undefined) {
        array.push(letter.toLowerCase());
      } else {
        // code morse inconnu → on insère un caractère de remplacement (ici '?')
        array.push("?");
      }
    }
  }
  return array.join(""); // transformer le tableau en chaine de caractères
}

console.log(decode("-.-. . -.-. .. / . ... - / ..- -. / - . ... -"));
