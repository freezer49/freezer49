"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animaux {
  pelage;
  cris;
  membres;
  capacite;
  habitat;
  regimeAlimentaire;
  constructor(pelage, cris, membres, capacite, habitat, regimeAlimentaire) {
    this.pelage = pelage;
    this.cris = cris;
    this.membres = membres;
    this.capacite = capacite;
    this.habitat = habitat;
    this.regimeAlimentaire = regimeAlimentaire;
  }
}
class Mammifere extends Animaux {
  constructor() {
    super(
      "poil",
      "cri",
      "membres",
      "marcher",
      "habitatNaturel",
      "regimeAlimentaire",
    );
  }
}
//# sourceMappingURL=index.js.map
