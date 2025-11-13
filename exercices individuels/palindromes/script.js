// ETAPE 1

// Creer une fonction  qui prend en paramètre une date en string et determine si elle est valide.
function isValidDate(dateString) {
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!regex.test(dateString)) {
    return false;
  }

  const [day, month, year] = dateString.split("/");
  const dayNum = parseInt(day);
  const monthNum = parseInt(month);
  const yearNum = parseInt(year);

  // Vérifier que le mois est entre 1 et 12
  if (monthNum < 1 || monthNum > 12) {
    return false;
  }

  // Vérifier que le jour est valide pour ce mois
  const maxDays = maxDaysInMonth(monthNum, yearNum);
  if (dayNum < 1 || dayNum > maxDays) {
    return false;
  }

  return true;
}

// Creer une fonction pour que le nombre de jour par moi soit valide
function maxDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

// ETAPE 2

// Creer une fonction qui prend une date en string en paramètre et retourne un booléen indiquant si la date est un palindrome.
function isDatePalindrome(dateString) {
  if (!isValidDate(dateString)) {
    return false;
  }
  const [day, month, year] = dateString.split("/");
  const formattedDate = day + month + year;
  return isPalindrome(formattedDate);
}

// ETAPE 3

// Créer une fonction getNextPalindromes qui donne les x prochaines dates palindromes à compter d'aujourd'hui. La fonction prendra le x en paramètre.

function getNextPalindromes(x) {
  let result = [];
  let date = new Date();

  while (result.length < x) {
    // Formatte juste la date
    let dateString = date.toLocaleDateString("fr-FR");

    // Vérifie si c'est un palindrome
    if (isDatePalindrome(dateString)) {
      result.push(dateString);
    }

    // Jour suivant
    date.setDate(date.getDate() + 1);
  }

  return result;
}

// ETAPE 4

// Refactorer la fonction isPalindrome pour faire en sorte qu'elle renvoie si, ou non, une chaine de caractère est un palindrome.

// Séparer la fonction isPalindrome
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

// Créer ensuite une nouvelle fonction isDatePalindrome qui reprendra les spécificités du palindrome au format date (comme s'assurer que la date est valide) et qui appellera isPalindrome.

// Test dans la console

console.log(isDatePalindrome("02/02/2020")); // true
console.log(isDatePalindrome("31/04/2021")); // false (date invalide)
console.log(getNextPalindromes(5)); // Affiche les 5 prochaines dates palindromes
