void main() {
    //TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
    // to see how IntelliJ IDEA suggests fixing it.
    System.out.println("Hello World");
    Chien chien = new Chien();

    chien.describe();

}

abstract class Animal{
    private int nbrDePatte;
    String pellage;
    private String cri;
    private String capacite;
    private String habitatNaturel;
    private Regime regime;

    public Animal(int nbrDePatte, String pellage, String cri, String capacite, String habitatNaturel, Regime regime) {
        this.nbrDePatte = nbrDePatte;
        this.pellage = pellage;
        this.cri = cri;
        this.capacite = capacite;
        this.habitatNaturel = habitatNaturel;
        this.regime = regime;
    }

    public Animal() {
    }

    public void describe() {
         System.out.println("Animal{" +
                "nbrDePatte=" + nbrDePatte +
                ", pellage='" + pellage + '\'' +
                ", cri='" + cri + '\'' +
                ", capacite='" + capacite + '\'' +
                ", habitatNaturel='" + habitatNaturel + '\'' +
                ", regime=" + regime +
                '}');
    };
}

abstract class Mamifere extends Animal {
    public Mamifere(int nbrDePatte, String cri, String capacite, String habitatNaturel, Regime regime) {
        super(nbrDePatte, "poils", cri, capacite, habitatNaturel, regime);
    };

    public Mamifere() {
    }
}
abstract class MamifereTerrestre extends Mamifere {
    public MamifereTerrestre (int nbrDepatte, String cri,Regime regime){
        super(nbrDepatte,cri, "marcher", "terre",regime);
    }
}

public  class Chien extends MamifereTerrestre {

    public Chien() {
        super(4, "Aboie", Regime.CARNIVORE);
    }

    @Override
    public void describe() {
        super.describe();
    }
}

public enum Regime {
    CARNIVORE,
    HERBIVORE,
    OMNIVORE;
}