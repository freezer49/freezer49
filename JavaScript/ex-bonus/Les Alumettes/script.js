// Étape 1 — Fonction d’attaque
// But : créer la fonction qui applique des dégâts aux PV du monstre.

// Entrées : remainingPv , damages
// Sortie : nouveau nombre de PV

function attack(remainingPv, damages) {
  return remainingPv - damages; // retourner directement le calcul des points de vie restants avec les dégats que l'on veut infliger
}

// Étape 2 — Demander les dégâts au joueur (boucle)
// But : tant que le monstre a des PV, demander au joueur combien il souhaite infliger.

// Créer askDamages(player) qui :
// affiche prompt("Joueur X, combien de dégâts ? (1-6)")
// convertit en nombre et retourne le nombre (sans validation ici entre 1 et 6).
// Boucle qui :
// appelle askDamages
// appelle attack pour mettre à jour les PV
// affiche l’état (console.log ou alert) après chaque attaque

function askDamages(player) {
  let playerPrompt = ""; // initialiser la variable qui stockera le prompt
  // ici on fait une boucle "do.. while" car on veut forcer l'utilisateur à entrer un chiffre entre 1 et 6
  do {
    playerPrompt = Number.parseInt(
      prompt(
        `Player ${player}, how many damages would you like to inflige ? (1-6)`
      )
    ); // on demande à l'utilisateur
  } while (playerPrompt < 0 || playerPrompt > 7 || isNaN(playerPrompt)); // tant que le prompt n'est pas correct
  return playerPrompt;
}

function play() {
  let monsterPv = 50; // on initialise les points de vie de monstre
  let player = 1; // on initialise le joueur actif

  while (monsterPv > 0) {
    // ici on fait une boucle while car on sait combien de fois on va itérer (on l'occurence 50, car le monstre à 50 points de vie)
    let damages = askDamages(player); // on appelle et on stocke les points de dégats que le joueur veut infliger (ici, damages vaut entre 1 et 6 donc)
    monsterPv = attack(monsterPv, damages); // on actualise les points de vie du monstre grâce à notre fonction (ex : monsterPv = 50 - 4)
    if ((player = 1)) {
      // petite condition pour changer de joueur si le joueur est 1 alors le changer à deux car il vient de jouer
      player = 2;
    } else {
      // si ce n'est pas le joueur 1 ça veut dire que le joueur 2 vient de jouer donc repasser au joueur 1
      player = 1;
    }
    // player = 1 ? 2 : 1; version ternaire
    if (monsterPv <= 0) {
      // gérer la victoire et la mort du monstre
      alert(`🎉Player ${player} won !`);
      break; // permet d'arrêter la boucle dès que les PV sont à 0
    }
  }
}

play(); // appeller la fonction

// Étape 3 — Validation des entrées (1 à 6) + détection de victoire
// But : s’assurer que le joueur choisit un entier entre 1 et 6 et gérer la victoire.

// Implémenter askDamages(player) :
// boucle qui redemande tant que l’entrée est NaN ou hors intervalle [1,6]
// retourne un entier valide

// Dans la boucle principale :
// après attack, vérifier if (pv <= 0) → afficher Joueur X a vaincu le monstre ! et terminer la partie.

// Étape 4 — Deux joueurs (alternance de tours)
// But : gérer l’alternance entre 2 joueurs.
