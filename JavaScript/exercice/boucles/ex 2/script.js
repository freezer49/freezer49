/// 1 - Je souhaite créer une variable appelé “message” de type string.

let message = ""  

/// 2 - Je souhaite créer une boucle qui va parcourir le tableau letters 

let letters = [ 'A', 'd', 'a', '-', 'T', 'e', 'c', 'h']

letters.forEach(function(letter) {
    message += letter;
});

/// 3 - Afficher le message dans la console
console.log(message);
