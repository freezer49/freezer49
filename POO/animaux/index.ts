class Animaux {
  pelage: string;
  cris: string;
  membres: number;
  capacite: string;
  habitat: string;
  regimeAlimentaire: string;

  constructor(
    pelage: string,
    cris: string,
    membres: number,
    capacite: string,
    habitat: string,
    regimeAlimentaire: string,
  ) {
    this.pelage = pelage;
    this.cris = cris;
    this.membres = membres;
    this.capacite = capacite;
    this.habitat = habitat;
    this.regimeAlimentaire = regimeAlimentaire;
  }
class Mammifere extends Animaux {
  constructor(
  ) {
    super('poil', 'grognement', 4, 'courir', 'terrestre', 'omnivore');
  
  }
}
}
