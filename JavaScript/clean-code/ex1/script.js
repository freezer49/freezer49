function calculerSomme(nombres) {
  if (!Array.isArray(nombres)) {
    return "Erreur: Vous devez passer un tableau de nombres";
  }
  let somme = 0;
  for (let index = 0; index < nombres.length; index++) {
    somme += nombres[index];
  }
  return somme;
}

console.log(calculerSomme([1, 2, 3, 4])); // Devrait retourner 10
console.log(calculerSomme([1, 2])); // Devrait retourner 3
console.log(calculerSomme([0])); // Devrait retourner 0
console.log(calculerSomme([1, 0])); // Devrait retourner 1

console.log(calculerSomme([1, "Haha"])); // Devrait retourner 1
console.log(calculerSomme()); // Devrait retourner "Erreur: Vous devez passer un tableau de nombres"
console.log(calculerSomme("Huhu")); // Devrait retourner "Erreur: Vous devez passer un tableau de nombres"
