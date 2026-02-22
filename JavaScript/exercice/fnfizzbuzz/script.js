// Creez une fonction fizzbuzz (number)
// Boucle for pour afficher les nombres
// Creez une fonction multiple de 3

function Fizzbuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}
Fizzbuzz(100);

// Creez une fonction multiple de 5
