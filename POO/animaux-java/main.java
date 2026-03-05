abstract class Animal { 
private Int nbrDePatte; 
private String pellage; 
private String cri; 
private String capacite; 
private String habitatNaturel; 
private Regime regime; 
}

public enum Regime { 
Carnivore, Herbivore, Omnivore
}

abstract class Mammifere extends Animal {}

