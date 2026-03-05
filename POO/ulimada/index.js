"use strict";
// Ajouter une action de soin sur le soigneur
// Ajouter une valeur d'attaque pour gérer les dégats
// Ajouter un buff au guerrier (hurlement)
Object.defineProperty(exports, "__esModule", { value: true });
class Personnage {
    pv;
    constructor(pv) {
        this.pv = pv;
    }
    attaque(cible) {
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
    soigner(cible) {
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
//# sourceMappingURL=index.js.map