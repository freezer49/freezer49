// ETAPE 1

// Creer une fonction  qui prend en paramètre une date en string et determine si elle est valide.
function isValidDate(dateString) {
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;
  return regex.test(dateString);
}

// Creer une fonction pour que le nombre de jour par moi soit valide
function maxDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

// ETAPE 2

// Creer une fonction qui prend une date en string en paramètre et retourne un booléen indiquant si la date est un palindrome.
function isPalindrome(dateString) {
  if (!isValidDate(dateString)) {
    return false;
  }
  const [day, month, year] = dateString.split("/");
  const formattedDate = day + month + year;
  const reversedDate = formattedDate.split("").reverse().join("");
  return formattedDate === reversedDate;
}

// ETAPE 3

// Créer une fonction getNextPalindromes qui donne les x prochaines dates palindromes à compter d’aujourd’hui. La fonction prendra le x en paramètre.

function getNextPalindromes(x) {
  let result = [];
  let date = new Date();

  while (result.length < x) {
    // Formatte juste la date
    let dateString = date.toLocaleDateString("fr-FR");

    // Vérifie si c'est un palindrome
    if (isPalindrome(dateString)) {
      result.push(dateString);
    }

    // Jour suivant
    date.setDate(date.getDate() + 1);
  }

  return result;
}
// ETAPE 4

// Refactorer la fonction isPalindrome pour faire en sorte qu’elle renvoie si, ou non, une chaine de caractère est un palindrome.

// Séparer la fonction isPalindrome
function isPalindrome(dateString) {
  return formattedDate === formattedDate.split("").reverse().join("");
}

// Créer ensuite une nouvelle fonction isDatePalindrome qui reprendra les spécificités du palindrome au format date (comme s’assurer que la date est valide) et qui appellera isPalindrome.
function isDatePalindrome(dateString) {
  if (!isValidDate(dateString)) {
    return false;
  }
  const [day, month, year] = dateString.split("/");
  const formattedDate = day + month + year;
  const reversedDate = formattedDate.split("").reverse().join("");
  return isPalindrome(formattedDate);
}

// Test les fonctions
console.log(isValidDate("13/11/2025")); // true
console.log(isPalindrome("12/02/2021")); // Vérifie si c'est un palindrome
console.log(getNextPalindromes(3)); // Les 3 prochaines dates palindromes
