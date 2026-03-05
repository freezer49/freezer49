// Ajouter une action de soin sur le soigneur
// Ajouter une valeur d'attaque pour gérer les dégats
// Ajouter un buff au guerrier (hurlement)

class Personnage {
  pv: number;
  constructor(pv: number) {
    this.pv = pv;
  }
  attaque(cible: Personnage) {
    cible.pv--;
  }
}

class Guerrier extends Personnage {
  constructor() {
    super(10);
  }
}

class Soigneur extends Personnage {
  constructor() {
    super(10);
  }
  soigner(cible: Guerrier) {
    cible.pv++;
  }
}

class Monstre extends Personnage {
  constructor() {
    super(10);
  }
}

const arthur = new Guerrier();
const jm = new Monstre();
const merlin = new Soigneur();
merlin.soigner(arthur);
arthur.attaque(jm);
jm.attaque(arthur);
console.log(arthur, jm, merlin);
