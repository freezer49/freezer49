/// Ex 1 

function addNumber (nbentier)
{ return nbentier*nbentier}
console.log (addNumber(3)) 

/// Ex 2

var resultatEx1 = addNumber 
function addNumber2 ( nbentier )
{ return nbentier*10}
console.log (addNumber2(resultatEx1))

/// Ex 3

let nombreUtilisateur = prompt("Entre un nombre :");
nombreUtilisateur = Number(nombreUtilisateur);

let resultat1 = addNumber(nombreUtilisateur);
console.log(resultat1);

let resultat2 = addNumber2(resultat1);
console.log(resultat2);