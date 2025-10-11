// Je souhaite déclarer la fonction 
{
function autorisationConduite (prenom, age) {

// Je souhaite afficher dans la console si ils sont autorisés à connduire

 if (age >= 17) {
     console.log(`${prenom} (${age} ans) est autorisé(e) à conduire.`);
} else {
     console.log(`${prenom} (${age} ans) n'est pas autorisé(e) à conduire.`);
    }
}

//Je souhaite appeler les chauffeurs
autorisationConduite("Mathieu", 22);
autorisationConduite("Léa", 15);
autorisationConduite("Jean", 17);
}