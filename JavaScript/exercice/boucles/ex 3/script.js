let number = parseInt(prompt("donnez un nombre entre 0 et 10"));

if (isNaN(number) || number < 0 || number > 10) {
  console.log("Erreur : veuillez entrer un nombre valide entre 0 et 10");
} else {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}